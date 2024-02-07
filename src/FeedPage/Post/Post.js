import talpic from "../profilepics/talpic.jpg";
import './Post.css'

const Post = (props) => {
  return (
    <div className="card" id="post-style">
      <div className="card-body">
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
      <img src={talpic} className="card-img-bottom" alt=""></img>
    </div>
  );
};

export default Post;
