import { useState } from "react";
import TextEdit from "./TextEdit";
import ImageEdit from "./ImageEdit";
import EditButton from "./EditButton";
import InvalidCom from "../../RegisterPage/InvalidCom";
import "../Modals.css";


const EditPostModal = (props) => {

  //getting the input filed from the arguments
  const inputFields = props.posttoedit;
  const setInputFields = props.setposttoedit;

  //setting error and submitting
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  return (
    <div
      className="modal fade"
      id="editpostModal"
      tabIndex="-1"
      aria-labelledby="editpostModalLabel"
      aria-hidden="false"
    >
      <div className="modal-dialog">
        <div className="modal-content modals-background">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="newpostModalLabel">
              Edit your post on ShareSphere
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <TextEdit
              inputFields={inputFields}
              setInputFields={setInputFields}
              initvalue={props.text}
            />
            <InvalidCom errors={errors.text}/>
            <br />
            <ImageEdit
              inputFields={inputFields}
              setInputFields={setInputFields}
              initvalue={props.img}
            />
          </div>
          <div className="modal-footer">
            <EditButton
              id={props.id}
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

export default EditPostModal;
