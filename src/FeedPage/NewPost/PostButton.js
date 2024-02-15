import React, { useEffect, useCallback, useState } from "react";

const PostButton = (props) => {
  //setting the state of submmiting to false
  const [buttonPost, setbuttonPost] = useState(false);
  const finishSubmit = useCallback(() => {
    //adding the new post to the posts list
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
    //setting the id for the next post
    props.setid(props.id + 1);
    props.setSubmitting(false);
    //setting the input fileds for the next post
    props.setInputFields({
      text: "",
      post_pic: "",
    });
    props.setpostsList([post, ...props.postsList]);
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
    //handle submit when button is pressed
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
