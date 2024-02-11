import "./NewPost.css";

const NewPost = (props) => {
  return (
    <div className="card" id="new-post">
      <div className="card-body">
        <span className="circle-image2" id="newpost-pro">
          <img src={props.logedinuser.user_pic} alt="" />
        </span>
        <button
          type="button"
          id="thinking-block"
          className="btn btn-light"
          data-bs-toggle="modal"
          data-bs-target="#newpostModal"
        >
          {props.logedinuser.first_name}, what are you thinking about?
        </button>
      </div>
    </div>
  );
};

export default NewPost;
