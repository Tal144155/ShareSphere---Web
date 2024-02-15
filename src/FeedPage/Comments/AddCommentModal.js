import { useState } from "react";
import CommentText from "./CommentText";
import InvalidCom from "../../RegisterPage/InvalidCom";
import CommentButton from "./CommentButton";
import "../Modals.css";

//this is the new comment modal, when the user will add its comment.
const AddCommentModal = (props) => {
  //creating a state that will hold the comment
  const [inputFields, setInputFields] = useState({
    comment: "",
  });
  //error if the user didnt enter text
  const [errors, setErrors] = useState({});

  //setting submit if the user pressed the button
  const [submitting, setSubmitting] = useState(false);
  //setting the id of the comment to start at 10
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
            {/*if the user didnt enter text this comoponent will show the error*/}
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
