import "./EditProfile.css";
import { useNavigate } from "react-router-dom";

const DeleteUser = (props) => {
  const navigate = useNavigate();

  async function DeleteUserServer() {
    try {
      let username = props.logedinuser.username;
      const response = await fetch(
        "/api/users/" + username,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: props.token,
          },
        }
      );
      const userData = await response.json();
      props.setlogedinuser({
        username: "",
        first_name: "",
        last_name: "",
        user_pic: "",
      });

      const newRoute = "/";
      navigate(newRoute);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  return (
    <button
      className="btn btn-primary"
      id="button-delete"
      onClick={DeleteUserServer}
    >
      <i class="bi bi-trash-fill"></i>
    </button>
  );
};

export default DeleteUser;
