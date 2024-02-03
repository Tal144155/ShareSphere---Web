import React from 'react';

const TextArea = React.forwardRef((props, ref) =>(
    <input
                    type={props.type}
                    name="user_name"
                    className="form-control"
                    ref={ref}
                    id={props.id}
                    placeholder={props.placeholder}
                    aria-describedby={props.describedby}

                  ></input>
  ))

export default TextArea;