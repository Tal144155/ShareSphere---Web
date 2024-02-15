import './Login.css';
import React from 'react';

  //setting the ref value to be the specific ref for the filed

const TextBox = React.forwardRef((props, ref) =>(
    <input
                    type={props.type}
                    name={props.name}
                    className="form-control"
                    ref={ref}
                    id={props.id}
                    placeholder={props.placeholder}
                    aria-describedby={props.describedby}

                  ></input>
  ))

export default TextBox;