import React, { useEffect, useCallback, useState } from "react";

const EditComButton = (props) => {
  //creating a state that changes the upload comment button state, checking if the form can be subbmited
  const [buttonPost, setbuttonPost] = useState(false);

  const finishSubmit = useCallback(async () => {
    await fetch(
      "http://localhost:8080/api/users/" +
        props.logedinuser.username +
        "/posts/" +
        props.postid +
        "/comments/" +
        props.commentid,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: props.token,
          content: props.inputFields.comment,
        },
      }
    );
    const response = await fetch("http://localhost:8080/api/posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: props.token,
        username: props.logedinuser.username,
      },
    });
    const posts = await response.json();
    props.setpostsList(posts);

    //setting the submmiting to false
    props.setSubmitting(false);
    //setting the new posts list
  }, [props]);

  useEffect(() => {
    //if there is text, change the submititing to ready!
    if (props.inputFields.comment.length !== 0) {
      setbuttonPost(true);
    } else {
      setbuttonPost(false);
    }
  }, [props.inputFields.comment.length, buttonPost, setbuttonPost]);

  useEffect(() => {
    //when button is pressed and the text is not null, finish
    if (Object.keys(props.errors).length === 0 && props.submitting) {
      finishSubmit();
    }
  }, [props.errors, props.submitting, finishSubmit]);

  const validateValues = (inputValues) => {
    //if there is no text add the error
    let errors = {};
    if (inputValues.comment.length === 0) {
      errors.comment = "Must write some text!";
    }
    return errors;
  };

  const handleSubmit = (event) => {
    //handle button pressed for submiting
    event.preventDefault();
    props.setErrors(validateValues(props.inputFields));
    props.setSubmitting(true);
  };
  //if the user entered the text, render the button that will submit. if not, render a button that will do nothing

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

export default EditComButton;
