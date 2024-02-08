import React, { useEffect, useCallback } from "react";


const PostButton = (props) => {
  const finishSubmit = useCallback(() => {
    const post = {
      key:"10",
        user_name: "tal144155",
        first_name:"Tal",
        last_name:"Ariel Ziv",
        user_pic:"/profilepics/talpic.jpg",
        time : "just now",
        text : props.inputFields.text,
        post_pic : props.inputFields.img,
        like_number : 0,
        comment_number :0,
        did_like: false,
        comments : []
    };
    props.setSubmitting(false);
    props.setpostsList([post, ...props.postsList]);
    
  }, [ props]);

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
    console.log(props.submitting);
  };


    {/*TODO : change that the button to close the tab only when post was subbmitted  */}

  if(Object.keys(props.errors).length === 0 && props.submitting) {
    return (
        <div className="d-grid gap-2 col-12 mx-auto">
          <button data-bs-dismiss="modal" className="btn btn-primary" type="submit">
            Close
          </button>
        </div>
      );
  }
  else {
    return (
        <div className="d-grid gap-2 col-12 mx-auto">
          <button onClick={handleSubmit} className="btn btn-primary" type="submit">
            Uplaod post!
          </button>
        </div>
      );
  }
}

export default PostButton;