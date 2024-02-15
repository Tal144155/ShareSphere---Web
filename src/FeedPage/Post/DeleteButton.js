const DeleteButton = (props) => {

  //delete button calls the deleting function in feed with the specific post id.
  return (
    <button className="dropdown-item" onClick={() =>props.handleDelete(props.id)}>
      <i className="bi bi-trash3"></i>&nbsp;&nbsp;Delete
    </button>
  );
};

export default DeleteButton;
