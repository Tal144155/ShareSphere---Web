import React from 'react';

const TextArea = (props) =>{


    const handleChange = (e) => {
        props.setInputFields({ ...props.inputFields, [e.target.name]: e.target.value });
        console.log(e.target.value);
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