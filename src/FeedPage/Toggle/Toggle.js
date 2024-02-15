import "./Toggle.css";

const Toggle = ({ handleChange, isChecked }) => {
  //the toggle changes the state of dark/light mode, with css from open source
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
