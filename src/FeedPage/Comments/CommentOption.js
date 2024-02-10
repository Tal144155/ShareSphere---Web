import './CommentOption.css'
import DeleteComment from './DeleteComment';

const CommentOption = (props) => {
    return (
        <div id="edit-delete-design-comment" className="btn-group dropend">
          <button
            id="buttonedit-comment"
            type="button"
            className="btn btn-light white"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i id="icon-place" className="bi bi-three-dots"></i>
          </button>
          <ul className="dropdown-menu">
            <li>
              <button
                className="dropdown-item"
                data-bs-toggle="modal"
                data-bs-target="#editpostModal"
              >
                <i className="bi bi-pen"></i>&nbsp;&nbsp;Edit
              </button>
            </li>
            <li><DeleteComment handleDeleteComment={props.handleDeleteComment} postid={props.postid} commentid={props.commentid} /></li>
          </ul>
        </div>
      );
}

export default CommentOption;