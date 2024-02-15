import React, { useEffect, useCallback, useState } from "react";

const EditButton = (props) => {
  //creating a state that changes the upload post button state, checking if the form can be subbmited
  const [buttonPost, setbuttonPost] = useState(false);

  const finishSubmit = useCallback(() => {
    //creating new array of posts with the edit
    const arrayNewPost = [];
    for (let i = 0; i < props.postsList.length; i++) {
      //search for the specific post id
      if (props.postsList[i].id !== props.id) {
        arrayNewPost.push(props.postsList[i]);
      } else {
        //when found, create the new post
        const newobj = {
          ...props.postsList[i],
          text: props.inputFields.text,
          post_pic: props.inputFields.imgurl,
        };
        //push the new post to the array
        arrayNewPost.push(newobj);
      }
    }
    props.setSubmitting(false);
    //set the posts list with the edited post
    props.setpostsList(arrayNewPost);
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
