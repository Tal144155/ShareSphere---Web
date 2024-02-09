const DeleteButton = (props, handleDelete) => {

  return (
    <button className="dropdown-item" onClick={() =>props.handleDelete(props.id)}>
      <i className="bi bi-trash3"></i>&nbsp;&nbsp;Delete
    </button>
  );
};

export default DeleteButton;
