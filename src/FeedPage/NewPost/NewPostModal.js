import { useState } from "react";
import PostText from "./PostText";
import "./NewPostModal.css";
import PostImage from "./PostImage";
import InvalidCom from "../../RegisterPage/InvalidCom";

const NewPostModal = (props) => {
  const [inputFields, setInputFields] = useState({
    text: "",
    imgurl: "",
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  return (
    <div
      className="modal fade"
      id="newpostModal"
      tabIndex="-1"
      aria-labelledby="newpostModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="newpostModalLabel">
              Write your thoughts on ShareSphere
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <PostText
              inputFields={inputFields}
              setInputFields={setInputFields}
            />
            <InvalidCom errors={errors.text} />
            <PostImage
              inputFields={inputFields}
              setInputFields={setInputFields}
            />
            <InvalidCom errors={errors.imgurl} />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              id="button-closed"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewPostModal;
