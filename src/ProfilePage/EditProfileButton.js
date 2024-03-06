import "./EditProfile.css"

const EditProfileButton = (props) => {
  return (
    <button
      className="btn btn-primary"
      id="button-edit-profile"
      data-bs-toggle="modal"
      data-bs-target="#editProfileModal"
    >
      <i className="bi bi-pen"></i>
    </button>
  );
};

export default EditProfileButton;
