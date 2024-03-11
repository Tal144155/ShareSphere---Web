import "./EditProfile.css";

const FriendsReqButton = (props) => {
  async function approveFriendRequest() {
    try {
      let username = props.logedinuser.username;
      let req_user_name = props.watchUser.username;
      const response = await fetch(
        "/api/users/" + req_user_name + "/friends",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: props.token,
            username: username,
          },
        }
      );
      const userData = await response.json();
      props.setHasSentReq(true);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  return (
    <button className="btn btn-primary" id="button-request" onClick={approveFriendRequest}>
      <i className="bi bi-person-fill-add"></i>
    </button>
  );
};

export default FriendsReqButton;
