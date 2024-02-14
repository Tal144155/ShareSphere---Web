import "./Share.css";

const Share = () => {
  //share options
  return (
    <div id="share-design" className="btn-group dropend">
      <button
      id="button-share-style"
        type="button"
        className="btn btn-light white"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Share&nbsp;&nbsp;
        <i className="bi bi-send"></i>
      </button>
      <ul className="dropdown-menu">
        <li>
          <button className="dropdown-item button-to-share"><i className="bi bi-whatsapp"></i>&nbsp;&nbsp;Whatsapp</button>
          <button className="dropdown-item button-to-share"><i className="bi bi-instagram"></i>&nbsp;&nbsp;Instagram</button>
          <button className="dropdown-item button-to-share"><i className="bi bi-messenger"></i>&nbsp;&nbsp;Messenger</button>

        </li>
      </ul>
    </div>
  );
};
export default Share;
