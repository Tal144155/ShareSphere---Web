import React from 'react';

const TextArea = (props) =>{
  //setting the input list on every change
    const handleChange = (e) => {
        props.setInputFields({ ...props.inputFields, [e.target.name]: e.target.value });
      };
    return(
    <input
                    type={props.type}
                    name={props.name}
                    className="form-control"
                    placeholder={props.placeholder}
                    aria-describedby={props.describedby}
                    value={props.inputFields.email}
                    onChange={handleChange}
                  ></input>
    );
}

export default TextArea;