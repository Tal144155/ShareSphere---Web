import { useState } from "react";
import './EditPost.css'

const ImageEdit = (props) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleChange = (e) => {
    setSelectedImage(e.target.files[0]);
    props.setInputFields({
      ...props.inputFields,
      [e.target.name]: URL.createObjectURL(e.target.files[0]),
    });
  };

  return (
    <div >
      { (
        <div>
          <span>
            <img
            id="image-center2"
              alt="not found"
              width={"250px"}
              value={props.initvalue}
              src={props.initvalue}
            />
          </span>
          <br />
        </div>
      )}
      <input
        type="file"
        name="imgurl"
        className="form-control"
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default ImageEdit;
