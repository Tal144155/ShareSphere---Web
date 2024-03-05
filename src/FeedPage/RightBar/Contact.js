import "./Contact.css";

const Contact = (props) => {
  //showing the contact with name and photo from props
  return (
    <button
      type="button"
      className="list-group-item list-group-item-action button-color"
      data-bs-toggle="modal"
      data-bs-target="#friendsModal"
      onClick={() => props.handleFriendRequest(props.user_name, props.first_name, props.last_name)}
    >
      <div>
        <div className="image-place">
          <span className="circle-image3">
            <img src={props.pic} alt="" />
          </span>
        </div>
        <div className="name-style">
          {props.first_name} {props.last_name}
        </div>
      </div>
    </button>
  );
};

export default Contact;
