import "./Login.css";

//this component will be rendered only if the users entred wrong info
function WrongLogin() {
  return (
    <div id="wrongLogin">
      <p>
        <i className="bi bi-exclamation-circle"></i> Wrong user name or
        password!
      </p>
    </div>
  );
}
export default WrongLogin;
