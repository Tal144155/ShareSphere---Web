import "./Comment.css";
//this component is responsible for opening the modal for adding comment
//after pressing the button, it calls a function in feed with the certian pst we want to add the comment.
const AddComment = (props) => {
  return (
    <div>
      <div id="placing-image">
        <span className="img-round-comment">
          <img src={props.logedinuser.user_pic} alt=""></img>
        </span>
      </div>
      <button
          type="button"
          id="comment-block"
          className="btn btn-light"
          data-bs-toggle="modal"
          data-bs-target="#newcommentModal"
          onClick={() => props.handleAddComment(props.postid)}
        >
          Share your thoughts...
        </button>
    </div>
  );
};

export default AddComment;
