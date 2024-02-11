import "./logoutbutton.css";
import { useNavigate } from "react-router-dom";

const LogOutButton = (props) => {
  const navigate = useNavigate();

  const handlelogout = (event) => {
    event.preventDefault();
    props.setlogedinuser({
      username: "",
      first_name: "",
      last_name: "",
      user_pic: "",
    });
    const newRoute = "/";
    navigate(newRoute);
  };
  return (
    <div>
      <button
        id="log-out"
        type="button"
        className="btn btn-light white"
        onClick={handlelogout}
      >
        <i class="bi bi-door-open"></i>
      </button>
    </div>
  );
};

export default LogOutButton;
