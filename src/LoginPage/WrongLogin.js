import './Login.css'

function WrongLogin() {
  return (
    <div id="wrongLogin">
      <p>
        <i className="bi bi-exclamation-circle"></i> Wrong user name or password!
      </p>
    </div>
  );
}
export default WrongLogin;
