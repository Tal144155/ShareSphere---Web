import "./FriendsModal.css";
const FriendsModal = (props) => {
  const onClickApprove = async (event) => {
    event.preventDefault();
    try {
      let username = props.logedinuser.username;
      let friend = props.userRequest.user_name;
      const response = await fetch(
        `http://localhost:8080/api/users/${username}/friends/${friend}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: props.token,
          },
        }
      );

      if (!response.ok) {
        // Handle non-successful response (e.g., 4xx or 5xx status codes)
        throw new Error(`Request failed with status ${response.status}`);
      }
      await props.fetchDataFriends();
      await props.fetchData();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const onClickDelete = async (event) => {
    event.preventDefault();
    try {
      let username = props.logedinuser.username;
      let friend = props.userRequest.user_name;
      const response = await fetch(
        `http://localhost:8080/api/users/${username}/friends/${friend}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: props.token,
          },
        }
      );

      if (!response.ok) {
        // Handle non-successful response (e.g., 4xx or 5xx status codes)
        throw new Error(`Request failed with status ${response.status}`);
      }
      await props.fetchDataFriends();
      await props.fetchData();
    } catch (error) {
      console.error("Error:", error);
    }
  };
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
            <button
              type="button"
              className="btn btn-primary button-friends"
              onClick={onClickApprove}
              data-bs-dismiss="modal"
            >
              <i className="bi bi-check2"></i>
            </button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button
              type="button"
              className="btn btn-danger button-friends"
              data-bs-dismiss="modal"
              onClick={onClickDelete}
            >
              <i className="bi bi-x-lg"></i>
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
