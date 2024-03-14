const TextProfileEdit = (props) => {
    //setting the input list on every change
    const handleChange = (e) => {
      props.setInputFields({
        ...props.inputFields,
        [e.target.name]: e.target.value,
      });
    };
    return (
      <input
        type="input"
        name={props.name}
        className="form-control"
        placeholder={props.placeholder}
        value={props.initvalue}
        onChange={handleChange}
      ></input>
    );
  };
  
  export default TextProfileEdit;