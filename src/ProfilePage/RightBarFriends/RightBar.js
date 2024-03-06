import Contact from "./Contact";
import "./RightBar.css";

const RightBar = (props) => {
  //right bar showing all the users in the json instead the logged in user
  return (
    <div className="list-group" id="menu-right">
      <div
        id="contacts"
        className="list-group-item list-group-item-action button-color-nohover"
      >
        <div id="contacts" className="buttons-style">
          <i className="bi bi-person-heart"></i> {props.details} friends
        </div>
      </div>
      {/*not showing the logged in user */}
      {props.friends.map((user) => (
        <Contact {...user} />
      ))}
      <button
        type="button"
        className="list-group-item list-group-item-action button-color-n"
        data-bs-toggle="modal"
        data-bs-target="#featureModal"
      >
        <div className="buttons-style">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </button>
    </div>
  );
};

export default RightBar;
