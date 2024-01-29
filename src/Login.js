import "./Login.css";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="col">
      <div class="card text-center mb-3" id="card-style">
        <div class="card-body">
          <div class="mb-3">
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Email or phone number"
            ></input>
            <input
              type="password"
              id="password"
              placeholder="Password"
              class="form-control"
              aria-describedby="passwordHelpBlock"
            ></input>
          </div>
          <div class="d-grid gap-2 col-12 mx-auto">
            <a href="/" class="btn btn-primary" type="button">
              Login
            </a>
          </div>
          <div id="forgot">
            <text>Forgot password?</text>
          </div>
          <hr id="border-line"></hr>
          <Link to="/App" id="new-account" class="btn btn-primary" type="submit">Create new account</Link>
        </div>
      </div>
    </div>
  );
}
export default Login;
