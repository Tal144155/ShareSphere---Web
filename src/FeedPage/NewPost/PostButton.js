import React, { useEffect, useCallback, useState } from "react";

const PostButton = (props) => {
  //setting the state of submmiting to false
  const [buttonPost, setbuttonPost] = useState(false);
  const finishSubmit = useCallback(async () => {
    //adding the new post to the posts list
    const post = {
      user_name: props.logedinuser.username,
      first_name: props.logedinuser.first_name,
      last_name: props.logedinuser.last_name,
      pic: props.inputFields.post_pic,
      profile: props.logedinuser.user_pic,
      content: props.inputFields.text,
    };
    //setting the id for the next post
    props.setSubmitting(false);
    //setting the input fileds for the next post
    props.setInputFields({
      text: "",
      post_pic: "",
      new_post: !props.inputFields.new_post,
    });
    const reponse = await fetch(
      "/api/users/" + props.logedinuser.username + "/posts",
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: props.token,
        },
        body: JSON.stringify(post),
      }
    );
    const responseData = await reponse.json();
    props.setpostsList([responseData, ...props.postsList]);
  }, [props]);

  useEffect(() => {
    //if there is text, change the submititing to ready!

    if (props.inputFields.text.length !== 0 && props.inputFields.post_pic && props.errors.links.length===0) {
      setbuttonPost(true);
    } else {
      setbuttonPost(false);
    }
  }, [
    props.errors.links.length,
    props.inputFields.text.length,
    props.inputFields.post_pic,
    buttonPost,
    setbuttonPost,
  ]);

  useEffect(() => {
    //when button is pressed and the text is not null, finish

    if (Object.keys(props.errors).length === 0 && props.submitting) {
      finishSubmit();
    }
  }, [props.errors, props.submitting, finishSubmit]);

  const validateValues = async (inputValues) => {
    //if there is no text, alert

    let errors = {};
    //creating array of links

    const httpRegex =
      /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%.\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%\+.~#?&\/=]*)$/;

    const matches = inputValues.text.match(httpRegex);

    const urlsArray = matches ? matches : [];

    const reponse = await fetch("http://localhost:8080/api/posts/links", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: props.token,
      },
      body: JSON.stringify({ listurl: urlsArray }),
    });
    const answer = await reponse.json();
    if (!answer.isValid) {
      errors.links = "Links attached to the post are illegal";
    }
    if (inputValues.text.length === 0) {
      errors.text = "Must write some text!";
    }
    if (!inputValues.post_pic) {
      errors.pic = "Must upload picture!";
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
