import "./Login.css";
import ReactDOM from 'react-dom/client';
import WrongLogin from "./WrongLogin";
import { useNavigate } from "react-router-dom";


const LoginButton = ({ props, pref, unr }) => {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
    event.preventDefault();

    const user_name = unr.current.value;
    const password = pref.current.value;
    const list = props.usersList.filter(
      (user) => user.user_name === user_name && user.password === password
    );
    const wronglogin = ReactDOM.createRoot(
      document.getElementById("wrongLogin")
    );

    if (list.length === 0) {
      const element = <WrongLogin />;
      wronglogin.render(element);
    } else {
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