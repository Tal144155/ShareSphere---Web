import React, { useEffect, useCallback, useState } from "react";

const CommentButton = (props) => {
  const [buttonPost, setbuttonPost] = useState(false);
  const finishSubmit = useCallback(() => {
    const comment = {
      key: props.id,
      id: props.id,
      user_name: "tal144155",
      first_name: "Tal",
      last_name: "Ariel Ziv",
      pic: "/profilepics/talpic.jpg",
      comment: props.inputFields.comment,
    };
    const arrayNewPost = [];
    for (let i = 0; i < props.postsList.length; i++) {
      if (props.postsList[i].id !== props.postid) {
        arrayNewPost.push(props.postsList[i]);
      } else {
        const commentslist = props.postsList[i].comments;
        commentslist.push(comment);
        const newobj = {
          ...props.postsList[i],
          comments: commentslist,
        };
        arrayNewPost.push(newobj);
      }
    }
    props.setpostsList(arrayNewPost);
    props.setid(props.id + 1);
    props.setSubmitting(false);
    props.setInputFields({
      comment: "helllooo",
    });
  }, [props]);

  useEffect(() => {
    if (props.inputFields.comment.length !== 0) {
      setbuttonPost(true);
    } else {
      setbuttonPost(false);
    }
  }, [props.inputFields.comment.length, buttonPost, setbuttonPost]);

  useEffect(() => {
    if (Object.keys(props.errors).length === 0 && props.submitting) {
      finishSubmit();
    }
  }, [props.errors, props.submitting, finishSubmit]);

  const validateValues = (inputValues) => {
    let errors = {};
    if (inputValues.comment.length === 0) {
      errors.comment = "Must write some text!";
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
