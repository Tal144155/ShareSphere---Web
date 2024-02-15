const DeleteComment = (props) => {
  //calling the deleting function that appears on Feed with the post id and comment id
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
