import React, { useEffect, useCallback, useState } from "react";

const CommentButton = (props) => {
  //creating a useState for preesing the button, and if when we press it the modal nwwd to closr or not
  const [buttonPost, setbuttonPost] = useState(false);
  const finishSubmit = useCallback(async () => {
    //creating new comment
    const comment = {
      content: props.inputFields.comment,
    };
    try {
      await fetch(
        "/api/users/" +
          props.logedinuser.username +
          "/posts/" +
          props.postid +
          "/comments",
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Authorization: props.token,
          },
          body: JSON.stringify(comment),
        }
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    props.setSubmitting(false);
    //set the comment input filed
    props.setInputFields({
      comment: "",
    });
    await props.fetchData();
  }, [props]);

  useEffect(() => {
    //if the user entered the text, make the button to indeed close the modal and submit the form
    if (props.inputFields.comment.length !== 0) {
      setbuttonPost(true);
    } else {
      //if not, dont close the modal
      setbuttonPost(false);
    }
  }, [props.inputFields.comment.length, buttonPost, setbuttonPost]);

  useEffect(() => {
    //when the user entered a comment (not empty) than finish the process
    if (Object.keys(props.errors).length === 0 && props.submitting) {
      finishSubmit();
    }
  }, [props.errors, props.submitting, finishSubmit]);

  const validateValues = (inputValues) => {
    //check for some text in the comment
    let errors = {};
    if (inputValues.comment.length === 0) {
      errors.comment = "Must write some text!";
    }
    return errors;
  };

  const handleSubmit = (event) => {
    //handle submit event
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
          Uplaod comment!
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
          Uplaod comment!
        </button>
      </div>
    );
  }
};
export default CommentButton;
