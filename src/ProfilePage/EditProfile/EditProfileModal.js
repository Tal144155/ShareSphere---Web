const EditProfileModal = (props) => {
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
          <div className="modal-body"></div>
          <div className="modal-footer"></div>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
