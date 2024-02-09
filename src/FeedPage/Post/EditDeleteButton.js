import "./EditDelete.css";

const EditDeleteButton = () => {
  return (
    <div id="edit-delete-design" className="btn-group dropend">
      <button
      id="buttonedit"
        type="button"
        className="btn btn-light white"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="bi bi-three-dots"></i>
      </button>
      <ul className="dropdown-menu">
        <li>
          <button className="dropdown-item">
          <i className="bi bi-pen"></i>&nbsp;&nbsp;Edit
          </button>
          <button className="dropdown-item">
          <i className="bi bi-trash3"></i>&nbsp;&nbsp;Delete
          </button>
          
        </li>
      </ul>
    </div>
  );
};

export default EditDeleteButton;
