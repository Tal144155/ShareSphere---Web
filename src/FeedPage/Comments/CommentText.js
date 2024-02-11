import './AddComment.css'

const CommentText = (props) => {
    const handleChange = (e) => {
        console.log(e.target.value);
        props.setInputFields({ ...props.inputFields, [e.target.name]: e.target.value });
      };
    return(
    <textarea id="comment-text-add"
                    type="text"
                    name="comment"
                    className="form-control"
                    placeholder="What are you thinking about?"
                    onChange={handleChange}
                    value={props.inputFields.comment}
                  ></textarea >
    );
}

export default CommentText;