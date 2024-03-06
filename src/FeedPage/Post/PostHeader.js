import "./PostHeader.css";

import { useNavigate } from "react-router-dom";

const PostHeader = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    props.setWatchUser({
      username: props.username,
      first_name: props.firstname,
      last_name: props.lastname,
      user_pic: props.user_pic,
    });
    const newRoute = "/profile";
    navigate(newRoute);
  };
  //returning the post header with name, photo, time
  return (
    <div onClick={handleClick}>
      <div id="image-place">
        <span className="circle-image2">
          <img src={props.user_pic} alt="" />
        </span>
      </div>
      <div id="name-style2">
        {props.firstname} {props.lastname}
      </div>
      <div id="time">
        <i className="bi bi-clock"></i> &nbsp;{props.time}
      </div>
    </div>
  );
};

export default PostHeader;
