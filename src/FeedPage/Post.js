import talpic from "../profilepics/talpic.jpg";
import './Post.css'
import ProfileShow from "./ProfileShow";

const Post = (props) => {
  return (
    <div class="card" id="post-style">
      <div class="card-body">
        <ProfileShow usersList={props.usersList}
          logedinuser={props.logedinuser}/>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
      <img src={talpic} class="card-img-bottom" alt=""></img>
    </div>
  );
};

export default Post;
