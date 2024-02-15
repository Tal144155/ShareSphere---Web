import { useState } from "react";
import ComTextEdit from "./ComTextEdit";
import InvalidCom from "../../RegisterPage/InvalidCom";
import EditComButton from "./EditComButton";
import "../Modals.css";

const EditCommentModal = (props) => {

  //getting from arguments the comment to edit
  const inputFields = props.commenttoedit;
  const setInputFields = props.setcommenttoedit;

  //setting the state for errors and submiting
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  return (
    <div
      className="modal fade"
      id="editcommentModal"
      tabIndex="-1"
      aria-labelledby="editcommentModalLabel"
      aria-hidden="false"
    >
      <div className="modal-dialog">
        <div className="modal-content  modals-background">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="newpostModalLabel">
              Edit your comment on ShareSphere
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <ComTextEdit
              inputFields={inputFields}
              setInputFields={setInputFields}
              initvalue={inputFields.comment}
            />
            <InvalidCom errors={errors.comment} />
          </div>
          <div className="modal-footer">
            <EditComButton
              postid={inputFields.postid}
              commentid={inputFields.commentid}
              inputFields={inputFields}
              setErrors={setErrors}
              setSubmitting={setSubmitting}
              submitting={submitting}
              errors={errors}
              postsList={props.postsList}
              setpostsList={props.setpostsList}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCommentModal;
