const PostText = (props) => {
    const handleChange = (e) => {
        console.log(e.target.value);
        props.setInputFields({ ...props.inputFields, [e.target.name]: e.target.value });
      };
    return(
    <textarea id="text-input"
                    type="text"
                    name="text"
                    className="form-control"
                    placeholder="What are you thinking about?"
                    onChange={handleChange}
                  ></textarea >
    );
}

export default PostText;