import "./Contact.css";

const Contact = (props) => {
  return (
    <button
      type="button"
      className="list-group-item list-group-item-action button-color"
      data-bs-toggle="modal"
      data-bs-target="#featureModal"
    >
      <div>
        <div className="image-place">
          <span className="circle-image2">
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
