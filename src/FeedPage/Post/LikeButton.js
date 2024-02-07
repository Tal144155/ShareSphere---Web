const LikeButton = (props) => {
  const handleSubmit = (event) => {
    if (props.like) {
      props.setnumLike(props.numlike - 1);
    } else {
      props.setnumLike(props.numlike + 1);
    }
    props.setLike(!props.like);
  };

  return !props.like ? (
    <button className="btn btn-light white" onClick={handleSubmit}>
      <i className="bi bi-hand-thumbs-up-fill">Like</i>
    </button>
  ) : (
    <button className="btn btn-block btn-secondary" onClick={handleSubmit}>
      <i className="bi bi-hand-thumbs-up-fill">Like</i>
    </button>
  );
};

export default LikeButton;
