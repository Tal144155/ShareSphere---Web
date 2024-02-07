import talpic from "../profilepics/talpic.jpg";
import "./ProfileShow.css";
const ProfileShow = (props) => {
  const onlineuser = props.usersList.filter(
    (user) => user.user_name === props.logedinuser.username
  );
  
  return (
    <div>
      <div id="image-place">
        <span className="circle-image2">
          <img src={talpic} alt="" />
        </span>
      </div>
      {/* {onlineuser[0].first_name} {onlineuser[0].last_name} - when ever i make change the page is loaded,
      and i cant do that anymore so i will insert this in the end */}
      <div id="name-style">
        Tal Ariel Ziv
      </div>
    </div>
  );
};

export default ProfileShow;
