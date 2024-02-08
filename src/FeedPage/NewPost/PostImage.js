import { useState } from "react";
import "./PostImage.css"
const PostImage = (props) => {
    const [selectedImage, setSelectedImage] = useState(null);

  const handleChange = (e) => {
    setSelectedImage(e.target.files[0]);
    props.setInputFields({ ...props.inputFields, [e.target.name]: URL.createObjectURL(e.target.files[0]) });
  };

  return (
    <div >
      {selectedImage && (
        <div>
          <span className="image">
          <img
            alt="not found"
            width={"250px"}
            value={URL.createObjectURL(selectedImage)}
            src={URL.createObjectURL(selectedImage)}
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
}

export default PostImage;