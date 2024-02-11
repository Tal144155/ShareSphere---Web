import React, { useEffect, useCallback, useState } from "react";

const EditButton = (props) => {
  const [buttonPost, setbuttonPost] = useState(false);
  const finishSubmit = useCallback(() => {
    const arrayNewPost = [];
    for (let i = 0; i < props.postsList.length; i++) {
      if (props.postsList[i].id !== props.id) {
        arrayNewPost.push(props.postsList[i]);
      } else {
        const newobj = {
          ...props.postsList[i],
          text: props.inputFields.text,
          post_pic: props.inputFields.imgurl,
        };
        arrayNewPost.push(newobj);
      }
    }
    props.setSubmitting(false);
    props.setpostsList(arrayNewPost);
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
          Uplaod edit!
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
          Upload edit!
        </button>
      </div>
    );
  }
};

export default EditButton;
