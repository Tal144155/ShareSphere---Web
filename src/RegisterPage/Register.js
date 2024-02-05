import "./Register.css";
import Slogen from "../Slogen";
import React from "react";
import UploadAndDisplayImage from "./UploadImage";
import { useState } from "react";
import { Link } from "react-router-dom";
import TextArea from "./TextArea";
import SignUpButton from "./SignUpButton.js";
import InvalidCom from "./InvalidCom.js";

function Register(props) {
  const [inputFields, setInputFields] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    repassword: "",
    imgurl: "",
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
                <label>Sign up</label>
                <label id="profile">choose propfile picture</label>
                <div className="col-md-12">
                  <UploadAndDisplayImage
                    inputFields={inputFields}
                    setInputFields={setInputFields}
                  />
                  <InvalidCom errors={errors.imgurl} />
                </div>
                <div className="col-md-6">
                  <TextArea
                    inputFields={inputFields}
                    setInputFields={setInputFields}
                    name={"firstname"}
                    type={"text"}
                    placeholder={"first name"}
                  />
                  <InvalidCom errors={errors.firstname} />
                </div>
                <div className="col-md-6">
                  <TextArea
                    inputFields={inputFields}
                    setInputFields={setInputFields}
                    name={"lastname"}
                    type={"text"}
                    placeholder={"last name"}
                  />
                  <InvalidCom errors={errors.lastname} />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-12">
                  <div className="input-group">
                    <span className="input-group-text">@</span>
                    <TextArea
                      inputFields={inputFields}
                      setInputFields={setInputFields}
                      name={"username"}
                      type={"text"}
                      placeholder={"user name"}
                    />
                  </div>
                  <InvalidCom errors={errors.username} />
                </div>
                <label id="must">
                  Password must include 8 letters and numbers!
                </label>
                <div className="col-md-6">
                  <TextArea
                    inputFields={inputFields}
                    setInputFields={setInputFields}
                    name={"password"}
                    type={"password"}
                    placeholder={"password"}
                  />
                  <InvalidCom errors={errors.password} />
                </div>
                <div className="col-md-6">
                  <TextArea
                    inputFields={inputFields}
                    setInputFields={setInputFields}
                    name={"repassword"}
                    type={"password"}
                    placeholder={"re-enter password"}
                  />
                  <InvalidCom errors={errors.repassword} />
                </div>
                <div className="col-12">
                  <SignUpButton
                    inputFields={inputFields}
                    setErrors={setErrors}
                    setSubmitting={setSubmitting}
                    submitting={submitting}
                    errors={errors}
                    usersList={props.usersList}
                    setusersList={props.setusersList}
                  />
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
