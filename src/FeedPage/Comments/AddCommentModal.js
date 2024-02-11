import { useState } from "react";
import CommentText from "./CommentText";
import InvalidCom from "../../RegisterPage/InvalidCom";
import CommentButton from "./CommentButton";
import "../Modals.css";

const AddCommentModal = (props) => {
  const [inputFields, setInputFields] = useState({
    comment: "",
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [id, setid] = useState(10);
  return (
    <div
      className="modal fade"
      id="newcommentModal"
      tabIndex="-1"
      aria-labelledby="newcommentModalLabel"
      aria-hidden="false"
    >
      <div className="modal-dialog">
        <div className="modal-content  modals-background">
          <div className="modal-header">
            <h1 className="modal-title fs-5">Share your comment</h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <CommentText
              inputFields={inputFields}
              setInputFields={setInputFields}
            />
            <InvalidCom errors={errors.comment} />
          </div>
          <div className="modal-footer">
            <CommentButton
              inputFields={inputFields}
              setInputFields={setInputFields}
              setErrors={setErrors}
              setSubmitting={setSubmitting}
              submitting={submitting}
              errors={errors}
              postsList={props.postsList}
              setpostsList={props.setpostsList}
              id={id}
              setid={setid}
              postid={props.postid}
              logedinuser={props.logedinuser}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCommentModal;
