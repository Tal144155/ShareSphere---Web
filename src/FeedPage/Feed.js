import "./Feed.css";
import LeftMenu from "./LeftMenu";
import SearchBox from "./SearchBox";

const Feed = (props) => {
  return (
    <div>
      <nav className="navbar fixed-top bg-body-tertiary" id="top-bar">
        <div className="container-fluid">
          <div id="slogen">ShareSphere</div>
          <SearchBox />
        </div>
      </nav>
      <div id="top-bar">
        <div id="slogen">ShareSphere</div>
      </div>
      <div id="feed-grid" className="container-fluid text-center .d-flex">
        <div className="row">
          <div className="col-3" id="left-bar">
            <LeftMenu/>
          </div>
          <div className="col-6">b</div>
          <div className="col-3">v</div>
        </div>
      </div>
    </div>
  );
};
export default Feed;
