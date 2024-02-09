import { useState } from "react";
import LikeButton from "./LikeButton";
import "./Post.css";
import PostHeader from "./PostHeader";

const Post = (props) => {
  const [like, setLike] = useState(false);
  const [numlike, setnumLike] = useState(props.like_number);
  return (
    <div className="card" id="post-style">
      <div className="card-body">
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
      <img
        src={props.post_pic}
        className="card-img-bottom-top"
        alt=""
      ></img>
      <div id="likecomments">
        <i className="bi bi-hand-thumbs-up-fill"></i> {numlike}
        &nbsp;&nbsp;
        <i className="bi bi-chat-fill"></i> {props.comment_number}
      </div>
      <hr id="border-line2"></hr>
      <LikeButton
        like={like}
        setLike={setLike}
        numlike={numlike}
        setnumLike={setnumLike}
        setpostslist={props.setpostsList}
      />
    </div>
  );
};

export default Post;
