import "./Feed.css";
import LeftMenu from "./LeftMenu/LeftMenu";
import SearchBox from "./TopBar/SearchBox";
import Feature from "./LeftMenu/Feature";
import Post from "./Post/Post";
import { useState } from "react";
import NewPost from "./NewPost/NewPost";
import NewPostModal from "./NewPost/NewPostModal";
import EditPostModal from "./EditPost/EditPostModal";
import AddCommentModal from "./Comments/AddCommentModal";
import EditCommentModal from "./EditComment/EditCommentModal";
import Toggle from "./Toggle/Toggle";
import LogOutButton from "./LogOut/logoutbutton";
import RightBar from "./RightBar/RightBar";
import { useEffect } from "react";
import FriendsModal from "./Friends/FriendsModal";

//this functin gets post array and id of a post, and deletes it from the array
export function PostListAfterDelete(postsList, id) {
  const arrayNewPost = [];
  for (let i = 0; i < postsList.length; i++) {
    //if the post id is not equal, push it to the new array
    if (postsList[i].id !== id) {
      arrayNewPost.push(postsList[i]);
    }
  }
  //return the new array of posts
  return arrayNewPost;
}

//this function gets comments array and a comment id, and deletes it from the array
export function CommentListAfterDelete(commentslist, commentid) {
  const arrayNewComment = [];
  for (let j = 0; j < commentslist.length; j++) {
    //pushing the comment if the id is not equal to the one we search
    if (commentslist[j].id !== commentid) {
      arrayNewComment.push(commentslist[j]);
    }
  }
  //returning the new array of comments
  return arrayNewComment;
}

const Feed = (props) => {
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
    //setpostsList(PostListAfterDelete(postsList, id));
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
        fetchData={fetchData}
      />
      <AddCommentModal
        postid={postaddcomment}
        postsList={postsList}
        setpostsList={setpostsList}
        logedinuser={props.logedinuser}
        token={props.token}
      />
      <NewPostModal
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
              usersList={props.usersList}
              logedinuser={props.logedinuser}
              setWatchUser={props.setWatchUser}
            />
          </div>
          <div className="col-6" id="posts">
            <br />
            <NewPost logedinuser={props.logedinuser} />
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
            <RightBar
              logedinuser={props.logedinuser}
              usersList={props.usersList}
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
export default Feed;
