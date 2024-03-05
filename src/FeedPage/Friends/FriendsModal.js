import "./FriendsModal.css";
const FriendsModal = (props) => {
  return (
    <div
      className="modal fade"
      id="friendsModal"
      tabIndex="-1"
      aria-labelledby="friendsModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content modals-background">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="friendsModalLabel">
              {props.logedinuser.first_name}, would you like to approve{" "}
              {props.userRequest.first_name}'s friend requset?
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body vertical-center">
            <button type="button" class="btn btn-primary button-friends">
              <i class="bi bi-check2"></i>
            </button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" class="btn btn-danger button-friends">
            <i class="bi bi-x-lg"></i>
            </button>
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

export default FriendsModal;
