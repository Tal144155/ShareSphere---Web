import "./Register.css";
import Slogen from "../Slogen";
import React from "react";
import UploadAndDisplayImage from "./UploadImage";
import { useState } from "react";
import { Link } from "react-router-dom";

function Register(props) {

  
  const [inputFields, setInputFields] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password:"",
    repassword:"",
    imgurl:""
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  return (
    <div id="register-grid" className="container text-center">
      <div className="row">
        <Slogen />
        <div className="col">
          <div className="card text-center mb-3" id="card-style2">
            <div className="card-body">
              <form className="row g-3 needs-validation" noValidate>
                <label >Sign up</label>
                <label id="profile">
                  choose propfile picture
                </label>
                <div className="col-md-12">
                <UploadAndDisplayImage />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustom01"
                    placeholder="first name"
                    required
                  ></input>
                  {errors.email ? (
                    <div className="invalid-feedback">
                    Please choose a username.
                  </div>
                  ) : null}
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustom02"
                    placeholder="last name"
                    required
                  ></input>
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-12">
                  <div className="input-group has-validation">
                    <span className="input-group-text" id="inputGroupPrepend">
                      @
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      id="validationCustomUsername"
                      aria-describedby="inputGroupPrepend"
                      placeholder="user name"
                      required
                    ></input>
                    <div className="invalid-feedback">
                      Please choose a username.
                    </div>
                  </div>
                </div>
                <label id="must">
                  Password must include 8 letters and numbers!
                </label>
                <div className="col-md-6">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="password"
                    required
                  ></input>
                  <div className="invalid-feedback">
                    Please provide a valid password.
                  </div>
                </div>
                <div className="col-md-6">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="re-enter password"
                    required
                  ></input>
                  <div className="invalid-feedback">
                    Please provide a valid password.
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn btn-primary" type="submit">
                    Sign me Up!
                  </button>
                </div>
              </form>
              <hr id="border-line"></hr>
                <Link to="/" id="new-account" className="btn btn-primary">
                  Already have an account? Login!
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;
