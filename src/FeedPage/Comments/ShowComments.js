import "./Comment.css";
import CommentOption from "./CommentOption";

const ShowComments = (props) => {
  return (
    <div>
      <div id="placing-image">
        <span className="img-round-comment">
          <img src={props.pic} alt=""></img>
        </span>
      </div>
      <div id="comment-style">
        <CommentOption postid={props.postid} commentid={props.id} handleDeleteComment={props.handleDeleteComment}/>
        <div id="name-placing">
          {props.first_name} {props.last_name}
        </div>
        <br />
        <div id="comment-placing">{props.comment}</div>
      </div>
    </div>
  );
};
export default ShowComments;
