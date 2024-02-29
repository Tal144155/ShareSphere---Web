import React, { useState } from "react";
import "./Register.css";
const UploadAndDisplayImage = (props) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleChange = (e) => {
    //setting the input list on every change
    const file = e.target.files[0];
    if (file) {
      // Read the image file as a Data URL
      const reader = new FileReader();
      reader.onloadend = () => {
        // Update state with selected image and Base64 representation
        setSelectedImage({
          file: file,
          base64: reader.result,
        });

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
      {selectedImage && (
        <div>
          <span className="circle-image">
            <img
              alt="not found"
              width={"250px"}
              value={URL.createObjectURL(selectedImage.file)}
              src={URL.createObjectURL(selectedImage.file)}
            />
          </span>
          <br />
          <br />
        </div>
      )}

      <input
        type="file"
        name="imgurl"
        className="form-control"
        id="inputGroupFile01"
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default UploadAndDisplayImage;
