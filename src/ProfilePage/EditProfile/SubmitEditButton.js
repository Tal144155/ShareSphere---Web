import React, { useEffect, useCallback, useState } from "react";


const SubmitEditButton = (props) => {
  //creating a state that changes the upload post button state, checking if the form can be subbmited
  const [buttonPost, setbuttonPost] = useState(false);

  const finishSubmit = useCallback(async () => {
    try {
      const newUser = {
        user_name: props.logedinuser.username,
        firstname: props.inputFields.first_name,
        lastname: props.inputFields.last_name,
        pic: props.inputFields.user_pic
      };
      await fetch(
        "http://localhost:8080/api/users/" +
          props.logedinuser.username,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: props.token,
          },
          body: JSON.stringify(newUser),
        }
      );
    } catch (error) {
      console.log("error...");
    }
    props.setSubmitting(false);
    const newUser = {
        username: props.logedinuser.username,
        first_name: props.inputFields.first_name,
        last_name: props.inputFields.last_name,
        user_pic: props.inputFields.user_pic
      };

    //change here!!!!!!! call the post new!!
    props.setlogedinuser(newUser);
    props.setWatchUser(newUser);
    await props.fetchData();
  }, [props]);

  useEffect(() => {
    //if there is text, change the submititing to ready!
    if (props.inputFields.first_name.length !== 0 && props.inputFields.last_name.length !== 0) {
      setbuttonPost(true);
    } else {
      setbuttonPost(false);
    }
  }, [props.inputFields.first_name.length,props.inputFields.last_name.length, buttonPost, setbuttonPost]);

  useEffect(() => {
    //when button is pressed and the text is not null, finish

    if (Object.keys(props.errors).length === 0 && props.submitting) {
      finishSubmit();
    }
  }, [props.errors, props.submitting, finishSubmit]);

  const validateValues = (inputValues) => {
    //if there is no text, alert
    let errors = {};
    if (props.inputFields.first_name.length === 0) {
      errors.first_name = "Must have a name!";
    }
    if (props.inputFields.last_name.length === 0) {
        errors.last_name = "Must have a last name!";
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
export default SubmitEditButton;
