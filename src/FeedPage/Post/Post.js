import { useState } from "react";
import LikeButton from "./LikeButton";
import "./Post.css";
import PostHeader from "./PostHeader";
import Share from "./Share";
import EditDeleteButton from "./EditDeleteButton";
import ShowComments from "../Comments/ShowComments";
import AddComment from "../Comments/AddComment";

function Post(props) {
  const [like, setLike] = useState(false);
  const [numlike, setnumLike] = useState(props.like_number);
  const [showcomments, setShowcomments] = useState(false);

  const showComments = () => {
    setShowcomments(!showcomments);
  };

  const comments = props.comments;
  console.log(props.logedinuser.username);
  console.log(props.user_name);

  return (
    <div className="card" id="post-style">
      <div className="card-body">
        {props.logedinuser.username === props.user_name && (
          <EditDeleteButton
            setpostsList={props.setpostsList}
            postsList={props.postsList}
            id={props.id}
            text={props.text}
            img={props.post_pic}
            handleDelete={props.handleDelete}
            handleEdit={props.handleEdit}
          />
        )}
        <PostHeader
          firstname={props.first_name}
          lastname={props.last_name}
          time={props.time}
          user_pic={props.user_pic}
        />

        <p className="card-text" id="text-style">
          {props.text}
        </p>
      </div>
      <img src={props.post_pic} className="card-img-bottom-top" alt=""></img>
      <div id="likecomments">
        <i className="bi bi-hand-thumbs-up-fill"></i> {numlike}
        &nbsp;&nbsp;
        <i className="bi bi-chat-fill"></i> {props.comment_number}
      </div>
      <hr id="border-line2"></hr>
      <div className="container-fluid">
        <div className="row">
          <div id="containers-option" className="col-4">
            <LikeButton
              like={like}
              setLike={setLike}
              numlike={numlike}
              setnumLike={setnumLike}
              setpostslist={props.setpostsList}
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
      {showcomments && (
        <div>
          <AddComment
            pic={"/profilepics/talpic.jpg"}
            postid={props.id}
            handleAddComment={props.handleAddComment}
            logedinuser={props.logedinuser}
          />
          <div>
            {comments.map((comment) => (
              <ShowComments
                {...comment}
                postid={props.id}
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
