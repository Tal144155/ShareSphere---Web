import { useState, useEffect } from "react";
import Contact from "./Contact";
import "./RightBar.css";

const RightBar = (props) => {
  const [friendsRequest, setRequest] = useState([]);
  useEffect(() => {
    fetchData();
  }, [props]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/users/" +
          props.logedinuser.username +
          "/friendsReq/",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: props.token,
            username: props.logedinuser.username,
          },
        }
      );
      const users = await response.json();
      setRequest(users);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //right bar showing all the users in the json instead the logged in user
  return (
    <div className="list-group" id="menu-right">
      <div
        id="contacts"
        className="list-group-item list-group-item-action button-color-nohover"
      >
        <div id="contacts" className="buttons-style">
          <i className="bi bi-person-heart"></i> Friends requests
        </div>
      </div>
      {/*not showing the logged in user */}
      {friendsRequest.map((user) => (
        <Contact {...user} />
      ))}
      <button
        type="button"
        className="list-group-item list-group-item-action button-color-n"
        data-bs-toggle="modal"
        data-bs-target="#featureModal"
      >
        <div className="buttons-style">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </button>
    </div>
  );
};

export default RightBar;
