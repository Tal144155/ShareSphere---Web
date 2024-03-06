import { useState } from "react";
import TextProfileEdit from "./TextProfileEdit";
import ImageEdit from "./ImageEdit";
const EditProfileModal = (props) => {
  const inputFields = props.inputFields;
  const setInputFields = props.setInputFields;

  return (
    <div
      className="modal fade"
      id="editProfileModal"
      tabIndex="-1"
      aria-labelledby="editProfileModalLabel"
      aria-hidden="false"
    >
      <div className="modal-dialog">
        <div className="modal-content modals-background">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="editProfileModalLabel">
              Edit your profile details
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="col-md-12">
              <ImageEdit
                initvalue={inputFields.user_pic}
                setInputFields={setInputFields}
                inputFields={inputFields}
              />
            </div>
            <br />
            <div className="row">
              <div className="col-md-6">
                <TextProfileEdit
                  name={"first_name"}
                  placeholder={"First Name"}
                  setInputFields={setInputFields}
                  inputFields={inputFields}
                  initvalue={inputFields.first_name}
                />
              </div>
              <div className="col-md-6">
                <TextProfileEdit
                  name={"last_name"}
                  placeholder={"Last Name"}
                  setInputFields={setInputFields}
                  inputFields={inputFields}
                  initvalue={inputFields.last_name}
                />
              </div>
            </div>
          </div>
          <div className="modal-footer"></div>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
