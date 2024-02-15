import "./Login.css";
import { useNavigate } from "react-router-dom";

const LoginButton = ({ props, pref, unr, seterror }) => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    //getting the values from the input using Ref
    const user_name = unr.current.value;
    const password = pref.current.value;
    //checking that there is a user like this
    const list = props.usersList.filter(
      (user) => user.user_name === user_name && user.password === password
    );
    //if not, alert and stop

    if (list.length === 0) {
      seterror(true);
    } else {
      //if yes, set the logged in user and navigate
      props.setlogedinuser({
        username: user_name,
        first_name: list[0].first_name,
        last_name: list[0].last_name,
        user_pic: list[0].pic,
      });
      const newRoute = "/feed";
      navigate(newRoute);
    }
  };

  return (
    <div className="d-grid gap-2 col-12 mx-auto">
      <button onClick={handleSubmit} className="btn btn-primary" type="submit">
        Login
      </button>
    </div>
  );
};

export default LoginButton;
