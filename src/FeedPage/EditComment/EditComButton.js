import React, { useEffect, useCallback, useState } from "react";


const EditComButton = (props) => {
    const [buttonPost, setbuttonPost] = useState(false);
    const finishSubmit = useCallback(() => {
    const arrayNewPost = [];
    const arrayNewComment = [];
    console.log(props.postid);
    for (let i = 0; i < props.postsList.length; i++) {
      if (props.postsList[i].id !== props.postid) {
        arrayNewPost.push(props.postsList[i]);
      } else {
        const commentslist = props.postsList[i].comments;
        for (let j = 0; j < commentslist.length; j++) {
          if (commentslist[j].id !== props.commentid) {
            arrayNewComment.push(commentslist[j]);
          } else {
            const newobj = {
                ...commentslist[j],
                comment:props.inputFields.comment
              };
            arrayNewComment.push(newobj);
          }
        }
        arrayNewPost.push({...props.postsList[i], comments: arrayNewComment});
      }
    }
    props.setSubmitting(false);
    props.setpostsList(arrayNewPost);
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
}

export default EditComButton;