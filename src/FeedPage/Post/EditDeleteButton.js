import DeleteButton from "./DeleteButton";
import "./EditDelete.css";

const EditDeleteButton = (props) => {
  //drop sown list for deleting or editing a post
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
          <button
            className="dropdown-item"
            data-bs-toggle="modal"
            data-bs-target="#editpostModal"
            onClick={() => props.handleEdit(props.id, props.text, props.img)}
          >
            <i className="bi bi-pen"></i>&nbsp;&nbsp;Edit
          </button>
          <DeleteButton
            id={props.id}
            setpostsList={props.setpostsList}
            postsList={props.postsList}
            handleDelete={props.handleDelete}
          />
        </li>
      </ul>
    </div>
  );
};

export default EditDeleteButton;
