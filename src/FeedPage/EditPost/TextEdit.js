import './EditPost.css'

const TextEdit = (props) => {
    const handleChange = (e) => {
        props.setInputFields({ ...props.inputFields, [e.target.name]: e.target.value });
      };
    return(
    <textarea id="edit-input"
                    type="text"
                    name="text"
                    className="form-control"
                    onChange={handleChange}
                    value={props.initvalue}
                  ></textarea >
    );
}

export default TextEdit;