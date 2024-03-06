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
import RightBar from "../FeedPage/RightBar/RightBar";
import { useEffect } from "react";
import FriendsModal from "../FeedPage/Friends/FriendsModal";


const ProfilePage = (props) => {
  //creating the state of the posts list and the post need to be edited

  const [postsList, setpostsList] = useState([]);
  const [posttoedit, setposttoedit] = useState({
    text: "",
    imgurl: "",
    id: "",
  });

  useEffect(() => {
    fetchData();
    fetchDataFriends();
  }, [props.logedinuser.username, props.token]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/posts", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: props.token,
          username: props.logedinuser.username,
        },
      });
      const posts = await response.json();
      setpostsList(posts);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //creating list of request friends
  const [friendsRequest, setRequest] = useState([]);
  const fetchDataFriends = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/users/" +
          props.logedinuser.username +
          "/friendsReq/",
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
      setRequest(users);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //creating the state of the post that the comment that will be added
  const [postaddcomment, setpostaddcomment] = useState(0);
  //user to approve or delete request
  const [userRequest, setUserRequest] = useState({
    user_name: "",
    first_name: "",
    last_name: "",
  });

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
  //set user to delete or approve
  function handleFriendRequest(user_name, first_name, last_name) {
    setUserRequest({
      user_name: user_name,
      first_name: first_name,
      last_name: last_name,
    });
  }

  //setting the postslist after deleting a post
  async function handleDelete(id) {
    let username = props.logedinuser.username;
    await fetch(
      "http://localhost:8080/api/users/" + username + "/posts/" + id,
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
      "http://localhost:8080/api/users/" +
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

  

  return (
    <div data-theme={props.isDark ? "dark" : "light"}>
      {/*rendering all the modals */}
      <Feature />
      <FriendsModal
        logedinuser={props.logedinuser}
        userRequest={userRequest}
        fetchDataFriends={fetchDataFriends}
        token={props.token}
      />
      <AddCommentModal
        postid={postaddcomment}
        postsList={postsList}
        setpostsList={setpostsList}
        logedinuser={props.logedinuser}
        token={props.token}
      />
      

      <EditCommentModal
        postsList={postsList}
        setpostsList={setpostsList}
        commenttoedit={commenttoedit}
        setcommenttoedit={setcommenttoedit}
        token={props.token}
        logedinuser={props.logedinuser}
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
      />

      {/*rendering the componnents of the feed */}

      <nav className="navbar fixed-top bg-body-tertiary" id="top-bar">
        <div className="container-fluid">
          <div id="slogen">
            <img id="image-style2" src="/logopic.png" alt=""></img>
          </div>
          <SearchBox />
          <LogOutButton setlogedinuser={props.setlogedinuser} />
          <Toggle isChecked={props.isDark} handleChange={() => props.setisDark(!props.isDark)} />
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
            />
          </div>
          <div className="col-6" id="posts">
            <br />
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
              />
            ))}
          </div>
          <div className="col-3" id="right-bar">
            <RightBar
              logedinuser={props.logedinuser}
              token={props.token}
              handleFriendRequest={handleFriendRequest}
              friendsRequest={friendsRequest}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfilePage;
