import React, { useEffect, useCallback, useState } from "react";

const PostButton = (props) => {
  const [buttonPost, setbuttonPost] = useState(false);
  const finishSubmit = useCallback(() => {
    const post = {
      key: props.id,
      id: props.id,
      user_name: props.logedinuser.username,
      first_name: props.logedinuser.first_name,
      last_name: props.logedinuser.last_name,
      user_pic: props.logedinuser.user_pic,
      time: "just now",
      text: props.inputFields.text,
      post_pic: props.inputFields.post_pic,
      like_number: 0,
      comment_number: 0,
      did_like: false,
      comments: [],
    };
    props.setid(props.id + 1);
    props.setSubmitting(false);
    props.setInputFields({
      text: "",
      imgurl: "",
    });
    props.setpostsList([post, ...props.postsList]);
  }, [props]);

  useEffect(() => {
    if (props.inputFields.text.length !== 0) {
      setbuttonPost(true);
    } else {
      setbuttonPost(false);
    }
  }, [props.inputFields.text.length, buttonPost, setbuttonPost]);

  useEffect(() => {
    if (Object.keys(props.errors).length === 0 && props.submitting) {
      finishSubmit();
    }
  }, [props.errors, props.submitting, finishSubmit]);

  const validateValues = (inputValues) => {
    let errors = {};
    if (inputValues.text.length === 0) {
      errors.text = "Must write some text!";
    }
    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.setErrors(validateValues(props.inputFields));
    props.setSubmitting(true);
  };

  if (buttonPost) {
    return (
      <div className="d-grid gap-2 col-12 mx-auto">
        <button
          data-bs-dismiss="modal"
          onClick={handleSubmit}
          className="btn btn-primary"
          type="submit"
        >
          Uplaod post!
        </button>
      </div>
    );
  } else {
    return (
      <div className="d-grid gap-2 col-12 mx-auto">
        <button
          onClick={handleSubmit}
          className="btn btn-primary"
          type="submit"
        >
          Uplaod post!
        </button>
      </div>
    );
  }
};

export default PostButton;
