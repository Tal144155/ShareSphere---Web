import "../FeedPage/Feed.css";
import LeftMenu from "../FeedPage/LeftMenu/LeftMenu";
import SearchBox from "../FeedPage/TopBar/SearchBox";
import Feature from "../FeedPage/LeftMenu/Feature";
import Post from "../FeedPage/Post/Post";
import { useState } from "react";
import EditPostModal from "../FeedPage/EditPost/EditPostModal";
import AddCommentModal from "../FeedPage/Comments/AddCommentModal";
import EditCommentModal from "../FeedPage/EditComment/EditCommentModal";
import Toggle from "../FeedPage/Toggle/Toggle";
import LogOutButton from "../FeedPage/LogOut/logoutbutton";
import RightBar from "./RightBarFriends/RightBar.js";
import { useEffect } from "react";
import "./ProfilePage.css";
import { useNavigate } from "react-router-dom";
import EditProfileButton from "./EditProfileButton";
import EditProfileModal from "./EditProfile/EditProfileModal";
import FriendsReqButton from "./FriendsReqButton.js";
import DeleteUser from "./DeleteUser.js";

const ProfilePage = (props) => {
  //creating the state of the posts list and the post need to be edited

  const [postsList, setpostsList] = useState([]);
  const [hasSentReq, setHasSentReq] = useState(false);
  const [areFriends, setAreFriends] = useState(false);

  const [posttoedit, setposttoedit] = useState({
    text: "",
    imgurl: "",
    id: "",
  });

  useEffect(() => {
    fetchData();
    if (props.watchUser.username === props.logedinuser.username) {
      fetchDataFriends();
    } else {
      fetchDataOtherFriends();
      checkHasBeenSentRequest();
    }
  }, [props.logedinuser.username, props.token, props.watchUser]);

  //fetching posts
  const fetchData = async () => {
    try {
      const response = await fetch(
        "/api/users/" +
          props.watchUser.username +
          "/posts",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: props.token,
            username: props.logedinuser.username,
          },
        }
      );
      const posts = await response.json();
      if (!posts.error) {
        setpostsList(posts);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //creating list of request friends
  const [friends, setFriends] = useState([]);
  const fetchDataFriends = async () => {
    try {
      const response = await fetch(
        "/api/users/" +
          props.logedinuser.username +
          "/friends/",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: props.token,
            username: props.logedinuser.username,
          },
        }
      );
      const users = await response.json();
      if (!users.error) {
        setFriends(users);
        setAreFriends(true);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchDataOtherFriends = async () => {
    try {
      const response = await fetch(
        "/api/users/" +
          props.watchUser.username +
          "/friends/",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: props.token,
            username: props.logedinuser.username,
          },
        }
      );
      const users = await response.json();
      if (!users.error) {
        setFriends(users);
        setAreFriends(true);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const checkHasBeenSentRequest = async () => {
    try {
      const response = await fetch(
        "/api/users/" +
          props.watchUser.username +
          "/friends/checkRequest/",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: props.token,
            username: props.logedinuser.username,
          },
        }
      );
      const answer = await response.json();
      if (answer.answer) {
        setHasSentReq(true);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //creating the state of the post that the comment that will be added
  const [postaddcomment, setpostaddcomment] = useState(0);

  //getting the info of the comment that will be edited
  const [commenttoedit, setcommenttoedit] = useState({
    commentid: "",
    comment: "",
    postid: "",
  });

  //handaling add comment, setting the post that the comment will be added to
  function handleAddComment(id) {
    setpostaddcomment(id);
  }

  //setting the postslist after deleting a post
  async function handleDelete(id) {
    let username = props.logedinuser.username;
    await fetch(
      "/api/users/" + username + "/posts/" + id,
      {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
          Authorization: props.token,
        },
      }
    );
    fetchData();
    ///
  }

  //setting the content of the post to be edited
  function handleEdit(id, text, img) {
    setposttoedit({
      text: text,
      imgurl: img,
      id: id,
    });
  }

  //deleting comments from the postslist
  async function handleDeleteComment(postid, commentid) {
    await fetch(
      "/api/users/" +
        props.logedinuser.username +
        "/posts/" +
        postid +
        "/comments/" +
        commentid,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: props.token,
        },
      }
    );
    fetchData();
  }

  //change the comment content to be edited
  function handleEditComment(commentid, postid, comment) {
    setcommenttoedit({
      commentid: commentid,
      comment: comment,
      postid: postid,
    });
  }
  const navigate = useNavigate();

  const HomaPage = () => {
    const newRoute = "/feed";
    navigate(newRoute);
  };

  const [inputFields, setInputFields] = useState({
    first_name: props.logedinuser.first_name,
    last_name: props.logedinuser.last_name,
    user_pic: props.logedinuser.user_pic,
  });

  const setUserDetails = () => {
    setInputFields({
      first_name: props.logedinuser.first_name,
      last_name: props.logedinuser.last_name,
      user_pic: props.logedinuser.user_pic,
    });
  };

  return (
    <div data-theme={props.isDark ? "dark" : "light"}>
      {/*rendering all the modals */}
      <Feature />

      <AddCommentModal
        postid={postaddcomment}
        postsList={postsList}
        setpostsList={setpostsList}
        logedinuser={props.logedinuser}
        token={props.token}
        fetchData={fetchData}
      />

      <EditCommentModal
        postsList={postsList}
        setpostsList={setpostsList}
        commenttoedit={commenttoedit}
        setcommenttoedit={setcommenttoedit}
        token={props.token}
        logedinuser={props.logedinuser}
        fetchData={fetchData}
      />

      <EditPostModal
        postsList={postsList}
        setpostsList={setpostsList}
        posttoedit={posttoedit}
        setposttoedit={setposttoedit}
        text={posttoedit.text}
        img={posttoedit.imgurl}
        id={posttoedit.id}
        token={props.token}
        logedinuser={props.logedinuser}
        fetchData={fetchData}
      />

      <EditProfileModal
        token={props.token}
        logedinuser={props.logedinuser}
        setlogedinuser={props.setlogedinuser}
        inputFields={inputFields}
        setInputFields={setInputFields}
        setWatchUser={props.setWatchUser}
        fetchData={fetchData}
      />

      {/*rendering the componnents of the feed */}

      <nav className="navbar fixed-top bg-body-tertiary" id="top-bar">
        <div className="container-fluid">
          <div id="slogen" onClick={HomaPage}>
            <img id="image-style2" src="/logopic.png" alt=""></img>
          </div>
          <SearchBox />
          <LogOutButton setlogedinuser={props.setlogedinuser} />
          <Toggle
            isChecked={props.isDark}
            handleChange={() => props.setisDark(!props.isDark)}
          />
        </div>
      </nav>
      <div id="top-bar">
        <div id="slogen">ShareSphere</div>
      </div>
      <div id="feed-grid" className="container-fluid text-center .d-flex">
        <div className="row">
          <div className="col-3" id="left-bar">
            <LeftMenu
              logedinuser={props.logedinuser}
              setWatchUser={props.setWatchUser}
            />
          </div>
          <div className="col-6" id="posts">
            <br />
            <div id="headers-style">
              <img
                id="image-headers-style"
                src="/postpics/galaxy.jpg"
                alt=""
              ></img>
              <span className="circle-image3">
                <img src={props.watchUser.user_pic} alt="" id="image-place3" />
              </span>

              <div id="text-placing-user">
                {props.watchUser.first_name} {props.watchUser.last_name}
              </div>
              {props.watchUser.username === props.logedinuser.username && (
                <EditProfileButton
                  setUserDetails={setUserDetails}
                  token={props.token}
                  logedinuser={props.logedinuser}
                  setlogedinuser={props.setlogedinuser}
                />
              )}
              {props.watchUser.username === props.logedinuser.username && (
                <DeleteUser
                  token={props.token}
                  logedinuser={props.logedinuser}
                  setlogedinuser={props.setlogedinuser}
                />
              )}
              {areFriends || hasSentReq ? null : (
                <FriendsReqButton
                  setHasSentReq={setHasSentReq}
                  token={props.token}
                  logedinuser={props.logedinuser}
                  watchUser={props.watchUser}
                />
              )}
            </div>

            {/*showing all the posts on the list */}
            {postsList.map((post) => (
              <Post
                {...post}
                setpostsList={setpostsList}
                postsList={postsList}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                handleAddComment={handleAddComment}
                handleDeleteComment={handleDeleteComment}
                handleEditComment={handleEditComment}
                logedinuser={props.logedinuser}
                token={props.token}
                fetchData={fetchData}
                setWatchUser={props.setWatchUser}
              />
            ))}
          </div>
          <div className="col-3" id="right-bar">
            {props.watchUser.username === props.logedinuser.username ? (
              <RightBar friends={friends} details={"Your"} />
            ) : (
              <RightBar
                friends={friends}
                details={props.watchUser.first_name + "'s"}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfilePage;
