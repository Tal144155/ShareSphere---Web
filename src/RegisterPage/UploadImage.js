import React, { useState } from "react";

const UploadAndDisplayImage = () => {

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div class="mb-3">
      {selectedImage && (
        <div>
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <br />

        </div>
      )}

      <input
        type="file"
        name="myImage"
        class="form-control"
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