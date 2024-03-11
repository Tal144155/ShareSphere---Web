import { useState } from "react";
import LikeButton from "./LikeButton";
import "./Post.css";
import PostHeader from "./PostHeader";
import Share from "./Share";
import EditDeleteButton from "./EditDeleteButton";
import ShowComments from "../Comments/ShowComments";
import AddComment from "../Comments/AddComment";
import { formatDistanceToNow } from "date-fns";
import { useEffect } from "react";

function Post(props) {
  //setting state for the like, num like and if the comments need to be shown
  const [like, setLike] = useState(false);
  const [numlike, setnumLike] = useState(props.likes);
  const [showcomments, setShowcomments] = useState(false);

  //if the show comments was pressed, update the state
  const showComments = () => {
    setShowcomments(!showcomments);
  };
  //need to fetch comments from server
  const [comments, setcomments] = useState([]);

  //need to fetch like

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "/api/users/" +
            props.logedinuser.username +
            "/posts/" +
            props._id +
            "/comments/",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: props.token,
              username: props.logedinuser.username,
            },
          }
        );
        const commentsList = await response.json();
        setcomments(commentsList);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const likeData = async () => {
      try {
        const reponse = await fetch(
          "/api/users/" +
            props.logedinuser.username +
            "/posts/" +
            props._id +
            "/likes",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: props.token,
            },
          }
        );
        const responseData = await reponse.json();
        setLike(responseData.isLiked);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    if (showcomments) {
       fetchData();
    } else {
       likeData();
    }
  }, [props, showcomments, like]);
  return (
    <div className="card" id="post-style">
      <div className="card-body">
        {props.logedinuser.username === props.user_name && (
          <EditDeleteButton
            setpostsList={props.setpostsList}
            postsList={props.postsList}
            id={props._id}
            text={props.content}
            img={props.pic}
            handleDelete={props.handleDelete}
            handleEdit={props.handleEdit}
          />
        )}
        <PostHeader
          firstname={props.first_name}
          lastname={props.last_name}
          time={formatDistanceToNow(new Date(props.publish_date), {
            addSuffix: true,
          })}
          user_pic={props.profile}
          setWatchUser={props.setWatchUser}
          username={props.user_name}
        />
        <br />

        <p className="card-text" id="text-style">
          {props.content}
        </p>
      </div>
      <img src={props.pic} className="card-img-bottom-top" alt=""></img>
      <div id="likecomments">
        <i className="bi bi-hand-thumbs-up-fill"></i> {props.likes}
        &nbsp;&nbsp;
        <i className="bi bi-chat-fill"></i> {props.comments.length}
      </div>
      <hr id="border-line2"></hr>
      <div className="container-fluid">
        <div className="row">
          <div id="containers-option" className="col-4">
            <LikeButton
              id={props._id}
              like={like}
              setLike={setLike}
              numlike={numlike}
              setnumLike={setnumLike}
              logedinuser={props.logedinuser}
              token = {props.token}
              fetchData={props.fetchData}
            />
          </div>
          <div id="containers-option" className="col-4">
            <button
              className="btn btn-light white"
              id="comment-button"
              onClick={showComments}
            >
              <i className="bi bi-chat-dots"></i>
              &nbsp;&nbsp;Comments
            </button>
          </div>
          <div id="containers-option" className="col-4">
            <Share />
          </div>
        </div>
      </div>
      {/*show comments only if the user pressed the button to show */}
      {showcomments && (
        <div>
          <AddComment
            pic={"/profilepics/talpic.jpg"}
            postid={props._id}
            handleAddComment={props.handleAddComment}
            logedinuser={props.logedinuser}
          />
          <div>
            {comments.map((comment) => (
              <ShowComments
                {...comment}
                postid={props._id}
                handleDeleteComment={props.handleDeleteComment}
                handleEditComment={props.handleEditComment}
                logedinuser={props.logedinuser}
                user_name_post={props.user_name}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Post;
