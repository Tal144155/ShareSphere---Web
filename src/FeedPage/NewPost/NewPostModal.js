import { useState } from "react";
import PostText from "./PostText";
import "./NewPostModal.css";
import PostImage from "./PostImage";
import InvalidCom from "../../RegisterPage/InvalidCom";
import PostButton from "./PostButton";
import "../Modals.css";


const NewPostModal = (props) => {
  //setting the input fileds to nothing as start
  const [inputFields, setInputFields] = useState({
    text: "",
    post_pic: "",
  });

  //setting errors, is subbmitted and a state holding the next post id to be added
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [id, setid] = useState(11);
  return (
    <div
      className="modal fade"
      id="newpostModal"
      tabIndex="-1"
      aria-labelledby="newpostModalLabel"
      aria-hidden="false"
    >
      <div className="modal-dialog">
        <div className="modal-content modals-background">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="newpostModalLabel">
              Write your thoughts on ShareSphere
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <PostText
              inputFields={inputFields}
              setInputFields={setInputFields}
            />
            <InvalidCom errors={errors.text} />
            <br/>
            <PostImage
              inputFields={inputFields}
              setInputFields={setInputFields}
            />
          </div>
          <div className="modal-footer">
            <PostButton inputFields={inputFields}
                    setErrors={setErrors}
                    setSubmitting={setSubmitting}
                    submitting={submitting}
                    errors={errors}
                    postsList={props.postsList}
                    setpostsList={props.setpostsList}
                    id={id}
                    setid={setid}
                    logedinuser={props.logedinuser}
                    setInputFields={setInputFields}
                    />
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewPostModal;
