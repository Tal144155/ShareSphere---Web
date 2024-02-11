import "./ProfileShow.css";
const ProfileShow = (props) => {
  console.log(props.logedinuser.user_pic);
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
