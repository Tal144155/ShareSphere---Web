import './logoutbutton.css'

const LogOutButton = (props) => {
  return (
    <div>
      <button id='log-out' type="button" className="btn btn-light white">
        <i class="bi bi-door-open"></i>
      </button>
    </div>
  );
};

export default LogOutButton;
