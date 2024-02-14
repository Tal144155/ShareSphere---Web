import "./AddComment.css";

const CommentText = (props) => {
  //setting the input list on every change

  const handleChange = (e) => {
    props.setInputFields({
      ...props.inputFields,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <textarea
      id="comment-text-add"
      type="text"
      name="comment"
      className="form-control"
      placeholder="What do you think about the post?"
      onChange={handleChange}
      value={props.inputFields.comment}
    ></textarea>
  );
};

export default CommentText;
