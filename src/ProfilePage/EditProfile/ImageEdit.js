import "./ImageEdit.css";

const ImageEdit = (props) => {
  //setting the input list on every change

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Read the image file as a Data URL
      const reader = new FileReader();
      reader.onloadend = () => {
        // Update state with selected image and Base64 representation

        // Update parent component's state if needed
        props.setInputFields({
          ...props.inputFields,
          [e.target.name]: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      {props.initvalue && (
        <div>
          <span className="circle-image10">
            <img
              alt="not found"
              value={props.initvalue}
              src={props.initvalue}
            />
          </span>
          <br />
        </div>
      )}
      <input
        type="file"
        name="user_pic"
        className="form-control"
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default ImageEdit;
