import "./PostImage.css";
import React, { useState, useEffect } from "react";

const PostImage = (props) => {
  //setting the input list on every change
  const [fileInputKey, setFileInputKey] = useState(0);

  useEffect(() => {
    // Reset file input value when the component is mounted or props.inputFields.post_pic changes
    setFileInputKey((prevKey) => prevKey + 1); // Update key to trigger re-render and reset file input value
  }, [props.inputFields.post_pic]);

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
      {props.inputFields.post_pic && (
        <div>
          <span>
            <img
              id="image-in-center"
              alt="not found"
              width={"250px"}
              value={props.inputFields.post_pic}
              src={props.inputFields.post_pic}
            />
          </span>
          <br />
        </div>
      )}
      <input
        key={fileInputKey}
        type="file"
        name="post_pic"
        className="form-control"
        id="inputGroupFile01"
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default PostImage;
