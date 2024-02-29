import "./Login.css";
import { useNavigate } from "react-router-dom";

const LoginButton = ({ props, pref, unr, seterror, setToken }) => {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    //getting the values from the input using Ref
    const user_name = unr.current.value;
    const password = pref.current.value;
    let data = {
      username: user_name,
      password: password,
    };

    const response = await fetch("http://localhost:8080/api/tokens", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    const token = responseData.token;
    //checking that there is a user like this

    if (token === undefined) {
      seterror(true);
    } else {
      //if yes, set the logged in user and navigate
      const response = await fetch(
        "http://localhost:8080/api/users/" + user_name,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      );
      const user = await response.json();
      if (!user.error) {
        props.setlogedinuser({
          username: user_name,
          first_name: user.first_name,
          last_name: user.last_name,
          user_pic: user.pic,
        });
        console.log(setToken);
        setToken(token);
        const newRoute = "/feed";
        navigate(newRoute);
      } else {
        seterror(true);
      }
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
