import "./Login.css";
import { Link } from "react-router-dom";
import Slogen from "../Slogen";
import React, { useRef } from "react";
import LoginButton from "./LoginButton";
import TextBox from "./TextBox";

function Login(props) {
  const user_name_Ref = useRef(undefined);
  const password_ref = useRef(undefined);
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
                    type="user_name"
                    placeholder="User Name"
                    ref={user_name_Ref}
                    describedby="usernameDescription"
                    id="id"
                  />
                  <TextBox
                    type="password"
                    placeholder="Password"
                    ref={password_ref}
                    describedby="passwordHelpBlock"
                    id="password"
                  />
                </div>
                <div id="wrongLogin"></div>
                <LoginButton
                  props={props}
                  pref={password_ref}
                  unr={user_name_Ref}
                />
                <div id="forgot">
                  <a href="/">Forgot password?</a>
                </div>
                <hr id="border-line"></hr>
                <Link to="/" id="new-account" className="btn btn-primary">
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
