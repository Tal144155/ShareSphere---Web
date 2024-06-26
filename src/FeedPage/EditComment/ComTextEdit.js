import './EditComment.css'

const ComTextEdit = (props) => {

    //setting the input list on every change

  const handleChange = (e) => {
    props.setInputFields({
      ...props.inputFields,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <textarea
      id="edit-input-comment"
      type="text"
      name="comment"
      className="form-control"
      onChange={handleChange}
      value={props.initvalue}
    ></textarea>
  );
};
export default ComTextEdit;
