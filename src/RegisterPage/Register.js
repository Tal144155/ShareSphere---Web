import "./Register.css";
import Slogen from "../Slogen";
import React from "react";

function Register(props) {
  return (
    <div id="register-grid" className="container text-center">
      <div className="row">
        <Slogen />
        <div className="col">
          <div className="card text-center mb-3" id="card-style">
            <div className="card-body">
              <form class="row g-3 needs-validation" novalidate>
                <div class="col-md-6">
                  <label for="validationCustom01" class="form-label">
                    First name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom01"
                    placeholder="first name"
                    required
                  ></input>
                  <div class="valid-feedback">Looks good!</div>
                </div>
                <div class="col-md-6">
                  <label for="validationCustom02" class="form-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationCustom02"
                    placeholder="last name"
                    required
                  ></input>
                  <div class="valid-feedback">Looks good!</div>
                </div>
                <div class="col-md-12">
                  <label for="validationCustomUsername" class="form-label">
                    Username
                  </label>
                  <div class="input-group has-validation">
                    <span class="input-group-text" id="inputGroupPrepend">
                      @
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      id="validationCustomUsername"
                      aria-describedby="inputGroupPrepend"
                      placeholder="user name"
                      required
                    ></input>
                    <div class="invalid-feedback">
                      Please choose a username.
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <label for="validationCustom03" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="validationCustom03"
                    placeholder="password"
                    required
                  ></input>
                  <div class="invalid-feedback">
                    Please provide a valid password.
                  </div>
                </div>
                <div class="col-md-6">
                  <label for="validationCustom03" class="form-label">
                    Re-enter password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="validationCustom03"
                    placeholder="re-enter password"
                    required
                  ></input>
                  <div class="invalid-feedback">
                    Please provide a valid password.
                  </div>
                </div>
                
                <div class="col-12">
                  <button class="btn btn-primary" type="submit">
                    Sign me Up!
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;
