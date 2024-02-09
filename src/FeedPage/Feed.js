import "./Feed.css";
import LeftMenu from "./LeftMenu/LeftMenu";
import SearchBox from "./TopBar/SearchBox";
import Feature from "./LeftMenu/Feature";
import Post from "./Post/Post";
import { useState } from "react";
import posts from "../data/posts.json";
import NewPost from "./NewPost/NewPost";
import NewPostModal from "./NewPost/NewPostModal";

const Feed = (props) => {
  const [postsList, setpostsList] = useState(posts);
  return (
    <div>
      <Feature />

      <NewPostModal postsList={postsList} setpostsList={setpostsList} />

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
            <LeftMenu
              usersList={props.usersList}
              logedinuser={props.logedinuser}
            />
          </div>
          <div className="col-6" id="posts">
            <br />
            <NewPost user_pic={"/profilepics/talpic.jpg"} />
            {postsList.map((post) => (
              <Post {...post} setpostsList={setpostsList} />
            ))}
          </div>
          <div className="col-3">v</div>
        </div>
      </div>
    </div>
  );
};
export default Feed;
