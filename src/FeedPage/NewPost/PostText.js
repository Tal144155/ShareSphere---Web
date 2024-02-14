const PostText = (props) => {
    const handleChange = (e) => {
        props.setInputFields({ ...props.inputFields, [e.target.name]: e.target.value });
      };
    return(
    <textarea id="text-input"
                    type="text"
                    name="text"
                    className="form-control"
                    placeholder="What are you thinking about?"
                    onChange={handleChange}
                    value={props.inputFields.text}
                  ></textarea >
    );
}

export default PostText;