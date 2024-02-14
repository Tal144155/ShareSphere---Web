import "./Login.css";
import { Link } from "react-router-dom";
import Slogen from "../Slogen";
import React, { useRef, useState } from "react";
import LoginButton from "./LoginButton";
import TextBox from "./TextBox";
import WrongLogin from "./WrongLogin";

function Login(props) {

  //crating refernces for the user name and password in order to get them when button is clicked
  const user_name_Ref = useRef(undefined);
  const password_ref = useRef(undefined);

  //setting errors if the user name or password are incorrect
  const [error, seterror] = useState(false);
  return (
    <div id="login-grid" className="container text-center">
      <div className="row">
        <Slogen />
        <div className="col">
          <div className="card text-center mb-3" id="card-style">
            <div className="card-body">
              <form className="Login">
                <div className="mb-3">
                  <TextBox
                    type="text"
                    placeholder="User Name"
                    ref={user_name_Ref}
                    describedby="usernameDescription"
                    id="id"
                    name={"user_name"}
                  />
                  <TextBox
                    type="password"
                    placeholder="Password"
                    ref={password_ref}
                    describedby="passwordHelpBlock"
                    id="password"
                    name={"password"}
                  />
                </div>
                <div id="wrongLogin"></div>
                {error && <WrongLogin />}
                <LoginButton
                  props={props}
                  pref={password_ref}
                  unr={user_name_Ref}
                  setlogedinuser={props.setlogedinuser}
                  seterror={seterror}
                />
                <hr id="border-line"></hr>
                <Link to="/register" id="new-account" className="btn btn-primary">
                  Create new account!
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
