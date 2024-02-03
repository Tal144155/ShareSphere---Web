import React, {useEffect } from 'react';

const SignUpButton = (props) => {


    


  const validateValues = (inputValues) => {
    let errors = {};
    if (inputValues.password.length < 5) {
      errors.password = "Password is too short";
    }
    if (inputValues.imgurl.length === 0) {
      errors.imgurl = "Must upload picture!";
    }
    if (inputValues.firstname.length === 0) {
      errors.firstname = "Must provide name!";
    }
    if (inputValues.lastname.length === 0) {
      errors.lastname = "Must provide last name!";
    }
    if (inputValues.username.length === 0) {
        errors.username = "Must provide user name!";
    }
    if (inputValues.repassword !== inputValues.password) {
        errors.repassword = "Password doesn't match!";
    }
    return errors;
  };

  const handleSubmit = (event) => {
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
