const DeleteComment = (props) => {
  return (
    <button
      className="dropdown-item"
      onClick={() => props.handleDeleteComment(props.postid, props.commentid)}
    >
      <i className="bi bi-trash3"></i>&nbsp;&nbsp;Delete
    </button>
  );
};
export default DeleteComment;
