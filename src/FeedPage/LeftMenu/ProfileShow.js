import "./ProfileShow.css";
const ProfileShow = (props) => {
  //showing the users name and last name, and pic from the props
  return (
    <div>
      <div id="image-place">
        <span className="circle-image2">
          <img src={props.logedinuser.user_pic} alt="" />
        </span>
      </div>
      <div id="name-style">
        {props.logedinuser.first_name} {props.logedinuser.last_name}
      </div>
    </div>
  );
};

export default ProfileShow;
