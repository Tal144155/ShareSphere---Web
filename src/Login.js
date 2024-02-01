import "./Login.css";
import { Link } from "react-router-dom";
import Slogen from "./Slogen";
import { useRef } from "react";
import UserCheck from "./UserCheck";
import ReactDOM from 'react-dom/client';
import WrongLogin from "./WrongLogin";


function Login(props) {

  const user_name_Ref = useRef(undefined);
  const password_ref = useRef(undefined);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const user_name = user_name_Ref.current.value;
    const password = password_ref.current.value;
    console.log(props.usersList);
    const list = props.usersList.filter((user) => user.user_name===user_name && user.password===password);
    /*console.log(list[0].user_name);*/
    if(list.length==0) {
      const wronglogin = ReactDOM.createRoot(
        document.getElementById("wrongLogin")
      );
      const element = (<WrongLogin/>);
      wronglogin.render(element);
    }
    else {
      console.log("i came here");
    }
  }
  

  return (
    <div id="login-grid" className="container text-center">
      <div className="row">
        <Slogen />
        <div className="col">
          <div className="card text-center mb-3" id="card-style">
            <div className="card-body">
              <form className="Login">
              <div className="mb-3">
                <input
                  type="user_name"
                  name="user_name"
                  className="form-control"
                  ref={user_name_Ref}
                  id="id"
                  placeholder="User Name"
                ></input>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  className="form-control"
                  ref={password_ref}
                  aria-describedby="passwordHelpBlock"
                ></input>
              </div>
              <div id="wrongLogin">
              </div>
              <div className="d-grid gap-2 col-12 mx-auto">
                <button onClick={handleSubmit} className="btn btn-primary" type="submit">Login</button>
              </div>
              <div id="forgot">
                <a href="/">Forgot password?</a>
              </div>
              <hr id="border-line"></hr>
              <Link to="/" id="new-account" className="btn btn-primary">Create new account!</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
