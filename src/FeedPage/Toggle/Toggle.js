import "./Toggle.css";

const Toggle = ({ handleChange, isChecked }) => {
    return (
        <div className="toggle-container">
        <input
          type="checkbox"
          id="check"
          className="toggle"
          onChange={handleChange}
          checked={isChecked}
        ></input>
        <label htmlFor="check"></label>
      </div>
    )
};

export default Toggle;
