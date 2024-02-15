import "./logoutbutton.css";
import { useNavigate } from "react-router-dom";

const LogOutButton = (props) => {
  const navigate = useNavigate();

  //when the button is pressed, log out
  const handlelogout = (event) => {
    event.preventDefault();
    //set the loged in user to nothing
    props.setlogedinuser({
      username: "",
      first_name: "",
      last_name: "",
      user_pic: "",
    });
    //navigate to the login
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
        <i className="bi bi-door-open"></i>
      </button>
    </div>
  );
};

export default LogOutButton;
