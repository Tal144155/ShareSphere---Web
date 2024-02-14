import "./RightBar.css";

const RightBar = (props) => {
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
          <i class="bi bi-person-heart"></i> Contacts
        </div>
      </button>
      <button
        type="button"
        className="list-group-item list-group-item-action button-color"
        data-bs-toggle="modal"
        data-bs-target="#featureModal"
      >
        <div className="buttons-style">
          <i class="bi bi-person-heart"></i> Contacs
        </div>
      </button>
    </div>
  );
};

export default RightBar;
