import Contact from "./Contact";
import "./RightBar.css";

const RightBar = (props) => {
  console.log(props.usersList);
  const usersList = props.usersList;
  return (
    <div className="list-group" id="menu-right">
      <button
        id="contacts"
        type="button"
        className="list-group-item list-group-item-action button-color"
        data-bs-toggle="modal"
        data-bs-target="#featureModal"
      >
        <div className="buttons-style">
          <i className="bi bi-person-heart"></i> Contacts
        </div>
      </button>
      {usersList.map((user) => {
        if (user.user_name !== props.logedinuser.username) {
          return <Contact {...user} />;
        }
        else {
            return null
        }
      })}
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


        </div>
      </button>
    </div>
  );
};

export default RightBar;
