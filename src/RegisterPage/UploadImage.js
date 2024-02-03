import React, { useState } from "react";
import './Register.css'
const UploadAndDisplayImage = () => {

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div >
      {selectedImage && (
        <div>
          <span className="circle-image">
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          </span>
          <br />
          <br />

        </div>
      )}

      <input
        type="file"
        name="myImage"
        className="form-control"
        id="inputGroupFile01"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      ></input>
    </div>
  );
};

export default UploadAndDisplayImage;