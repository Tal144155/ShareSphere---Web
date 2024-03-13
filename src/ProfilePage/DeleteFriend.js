import "./EditProfile.css";
import { useNavigate } from "react-router-dom";

const DeleteFriend = (props) => {
  const navigate = useNavigate();

  async function DeleteFriendrServer() {
    try {
      let username = props.logedinuser.username;
      const response = await fetch(
        "/api/users/" + username + "/friends/" + props.watchUser.username,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: props.token,
          },
        }
      );
      const newRoute = "/feed";
      navigate(newRoute);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  return (
    <button
      className="btn btn-primary"
      id="button-delete-friend"
      onClick={DeleteFriendrServer}
    >
      <i class="bi bi-person-fill-dash"></i>
    </button>
  );
};

export default DeleteFriend;
