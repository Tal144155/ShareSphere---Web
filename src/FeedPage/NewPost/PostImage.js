import "./PostImage.css";
const PostImage = (props) => {
  //setting the input list on every change

  const handleChange = (e) => {
    props.setInputFields({
      ...props.inputFields,
      [e.target.name]: URL.createObjectURL(e.target.files[0]),
    });
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
