import "./LeftMenu.css";
import ProfileShow from "./ProfileShow";
import Feature from "./Feature.js";

const LeftMenu = (props) => {
  return (
    <div className="list-group" id="menu-style">
      <button
        type="button"
        className="list-group-item list-group-item-action"
        aria-current="true"
      >
        <ProfileShow
          usersList={props.usersList}
          logedinuser={props.logedinuser}
        />
      </button>
      <button type="button" className="list-group-item list-group-item-action" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <div className="buttons-style">
          <i className="bi bi-people"></i> Friends
        </div>
      </button>
      <button type="button" className="list-group-item list-group-item-action">
        <div className="buttons-style">
          <i className="bi bi-people-fill"></i> Groups
        </div>
      </button>
      <button type="button" className="list-group-item list-group-item-action">
        <div className="buttons-style">
          <i className="bi bi-clock-history"></i> Memories
        </div>
      </button>
      <button type="button" className="list-group-item list-group-item-action">
        <div className="buttons-style">
          <i className="bi bi-bookmark-fill"></i> Saved
        </div>
      </button>
      <button type="button" className="list-group-item list-group-item-action">
        <div className="buttons-style">
          <i className="bi bi-youtube"></i> Videos
        </div>
      </button>
      <button type="button" className="list-group-item list-group-item-action">
        <div className="buttons-style">
          <i className="bi bi-calendar-fill"></i> Events
        </div>
      </button>
      <button type="button" className="list-group-item list-group-item-action">
        <div className="buttons-style">
          <i class="bi bi-balloon-heart-fill"></i> Fundings
        </div>
      </button>
      <button type="button" className="list-group-item list-group-item-action">
        <div className="buttons-style">
          <i class="bi bi-basket2-fill"></i> MarkerPlace
        </div>
      </button>
      <button type="button" className="list-group-item list-group-item-action">
        <div className="buttons-style">
        <i class="bi bi-chat-dots-fill"></i> Messenger
        </div>
      </button>
      <button type="button" className="list-group-item list-group-item-action">
        <div className="buttons-style">
        <i class="bi bi-joystick"></i> Gaming
        </div>
      </button>
    </div>
  );
};

export default LeftMenu;
