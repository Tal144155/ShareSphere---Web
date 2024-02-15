import "./LikeButton.css";

const LikeButton = (props) => {
  //when a like button is pressed, change the like number as followed and change the button to look diffrent
  const handleSubmit = () => {
    if (props.like) {
      props.setnumLike(props.numlike - 1);
    } else {
      props.setnumLike(props.numlike + 1);
    }
    props.setLike(!props.like);
  };

  return !props.like ? (
    <button
      id="button-like"
      className="btn btn-light white"
      onClick={handleSubmit}
    >
      <i className="bi bi-hand-thumbs-up">&nbsp;&nbsp;</i>Like
    </button>
  ) : (
    <button
      id="button-like-liked"
      className="btn btn-block btn-secondary"
      onClick={handleSubmit}
    >
      <i className="bi bi-hand-thumbs-up-fill">&nbsp;&nbsp;</i>Like
    </button>
  );
};

export default LikeButton;
