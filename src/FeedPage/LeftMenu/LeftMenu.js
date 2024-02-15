import "./LeftMenu.css";
import ProfileShow from "./ProfileShow";

const LeftMenu = (props) => {

  //left menu containing: propfile show with the name and pic, and diffrent option for the user
  return (
    <div className="list-group" id="menu-style">
      <button
        type="button"
        className="list-group-item list-group-item-action button-color"
        aria-current="true"
      >
        <ProfileShow
          usersList={props.usersList}
          logedinuser={props.logedinuser}
        />
      </button>
      <button
        type="button"
        className="list-group-item list-group-item-action button-color"
        data-bs-toggle="modal"
        data-bs-target="#featureModal"
      >
        <div className="buttons-style">
          <i className="bi bi-people"></i> Friends
        </div>
      </button>
      <button
        type="button"
        className="list-group-item list-group-item-action  button-color"
        data-bs-toggle="modal"
        data-bs-target="#featureModal"
      >
        <div className="buttons-style">
          <i className="bi bi-people-fill"></i> Groups
        </div>
      </button>
      <button
        type="button"
        className="list-group-item list-group-item-action  button-color"
        data-bs-toggle="modal"
        data-bs-target="#featureModal"
      >
        <div className="buttons-style">
          <i className="bi bi-clock-history"></i> Memories
        </div>
      </button>
      <button
        type="button"
        className="list-group-item list-group-item-action  button-color"
        data-bs-toggle="modal"
        data-bs-target="#featureModal"
      >
        <div className="buttons-style">
          <i className="bi bi-bookmark-fill"></i> Saved
        </div>
      </button>
      <button
        type="button"
        className="list-group-item list-group-item-action  button-color"
        data-bs-toggle="modal"
        data-bs-target="#featureModal"
      >
        <div className="buttons-style">
          <i className="bi bi-youtube"></i> Videos
        </div>
      </button>
      <button
        type="button"
        className="list-group-item list-group-item-action  button-color"
        data-bs-toggle="modal"
        data-bs-target="#featureModal"
      >
        <div className="buttons-style">
          <i className="bi bi-calendar-fill"></i> Events
        </div>
      </button>
      <button
        type="button"
        className="list-group-item list-group-item-action  button-color"
        data-bs-toggle="modal"
        data-bs-target="#featureModal"
      >
        <div className="buttons-style">
          <i className="bi bi-balloon-heart-fill"></i> Fundings
        </div>
      </button>
      <button
        type="button"
        className="list-group-item list-group-item-action  button-color"
        data-bs-toggle="modal"
        data-bs-target="#featureModal"
      >
        <div className="buttons-style">
          <i className="bi bi-basket2-fill"></i> MarkerPlace
        </div>
      </button>
      <button
        type="button"
        className="list-group-item list-group-item-action  button-color"
        data-bs-toggle="modal"
        data-bs-target="#featureModal"
      >
        <div className="buttons-style">
          <i className="bi bi-chat-dots-fill"></i> Messenger
        </div>
      </button>
      <button
        type="button"
        className="list-group-item list-group-item-action  button-color"
        data-bs-toggle="modal"
        data-bs-target="#featureModal"
      >
        <div className="buttons-style">
          <i className="bi bi-joystick"></i> Gaming
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

export default LeftMenu;
