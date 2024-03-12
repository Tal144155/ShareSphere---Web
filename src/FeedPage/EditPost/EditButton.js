import React, { useEffect, useCallback, useState } from "react";

const EditButton = (props) => {
  //creating a state that changes the upload post button state, checking if the form can be subbmited
  const [buttonPost, setbuttonPost] = useState(false);

  const finishSubmit = useCallback(async () => {
    try {
      const comment = {
        content: props.inputFields.text,
        pic: props.inputFields.imgurl,
      };
      await fetch(
        "/api/users/" +
          props.logedinuser.username +
          "/posts/" +
          props.id,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: props.token,
          },
          body: JSON.stringify(comment),
        }
      );
    } catch (error) {
      console.log("error...");
    }
    props.setSubmitting(false);
    props.fetchData();
    //set the posts list with the edited post
  }, [props]);

  useEffect(() => {
    //if there is text, change the submititing to ready!

    if (props.inputFields.text.length !== 0) {
      setbuttonPost(true);
    } else {
      setbuttonPost(false);
    }
  }, [props.inputFields.text.length, buttonPost, setbuttonPost]);

  useEffect(() => {
    //when button is pressed and the text is not null, finish

    if (Object.keys(props.errors).length === 0 && props.submitting) {
      finishSubmit();
    }
  }, [props.errors, props.submitting, finishSubmit]);

  const validateValues = (inputValues) => {
    //if there is no text, alert
    let errors = {};
    if (inputValues.text.length === 0) {
      errors.text = "Must write some text!";
    }
    return errors;
  };

  const handleSubmit = (event) => {
    //handle submit and edit post
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

export default EditButton;
