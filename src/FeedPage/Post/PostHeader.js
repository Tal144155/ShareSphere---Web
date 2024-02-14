import "./PostHeader.css";
const PostHeader = (props) => {
  //returning the post header with name, photo, time
  return (
    <div>
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
