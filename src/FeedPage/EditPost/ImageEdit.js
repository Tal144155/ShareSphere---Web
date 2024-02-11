import './EditPost.css'

const ImageEdit = (props) => {

  const handleChange = (e) => {
    props.setInputFields({
      ...props.inputFields,
      [e.target.name]: URL.createObjectURL(e.target.files[0]),
    });
  };

  return (
    <div >
      { props.initvalue && (
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
