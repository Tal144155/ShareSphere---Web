import React, { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const SignUpButton = (props) => {
  const navigate = useNavigate();

  const finishSubmit = useCallback(() => {
    //if all went through well, finish the signup and update the list
    //creating new user
    const user = {
      user_name: props.inputFields.username,
      password: props.inputFields.password,
      first_name: props.inputFields.firstname,
      last_name: props.inputFields.lastname,
      pic: props.inputFields.imgurl,
    };
    //adding it to the list
    props.setusersList([...props.usersList, user]);

    //navigating to new route
    const newRoute = "/";
    navigate(newRoute);
  }, [navigate, props]);

  useEffect(() => {
    //only if there are no wrrors left, and the button has been presses, go to finish
    if (Object.keys(props.errors).length === 0 && props.submitting) {
      finishSubmit();
    }
  }, [props.errors, props.submitting, finishSubmit]);

  const validateValues = (inputValues) => {
    //updating the error state with all the problems from the user each time he presses the signup button
    let errors = {};
    //checking if the user name already exists
    const list = props.usersList.filter(
      (user) => user.user_name === inputValues.username
    );
    //creating rergex for name and password
    let regexname = /^[a-zA-Z -]+$/;
    let regexPassword = /^(?=.*[a-zA-Z])(?=.*\d).+$/;
    //checking the user name doesnot exist
    if (list.length !== 0) {
      errors.username = "User name already exists!";
    }
    //checking the password is long enough
    if (inputValues.password.length < 8) {
      errors.password = "Password is too short";
    }
    //checking the names contain only letters
    if (!regexname.test(inputValues.firstname)) {
      errors.firstname = "Name with letters only!";
    }
    if (!regexname.test(inputValues.lastname)) {
      errors.lastname = "Letters only!";
    }
    //checking password validation
    if (!regexPassword.test(inputValues.password)) {
      errors.password = "Must contains letters & numbers";
    }
    //check for image
    if (inputValues.imgurl.length === 0) {
      errors.imgurl = "Must upload picture!";
    }
    //check all inputs not empty
    if (inputValues.firstname.length === 0) {
      errors.firstname = "Must provide name!";
    }
    if (inputValues.lastname.length === 0) {
      errors.lastname = "Must provide last name!";
    }
    if (inputValues.username.length === 0) {
      errors.username = "Must provide user name!";
    }
    //check repass are the same as pass
    if (inputValues.repassword !== inputValues.password) {
      errors.repassword = "Password doesn't match!";
    }
    return errors;
  };

  const handleSubmit = (event) => {
    //triger when the button is clicked
    event.preventDefault();
    props.setErrors(validateValues(props.inputFields));
    props.setSubmitting(true);
  };

  return (
    <div className="d-grid gap-2 col-12 mx-auto">
      <button onClick={handleSubmit} className="btn btn-primary" type="submit">
        Sign me Up!
      </button>
    </div>
  );
};

export default SignUpButton;
