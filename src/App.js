import "./App.css";
import Login from "./LoginPage/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import users from "./data/users.json";
import { useState } from "react";
import Register from "./RegisterPage/Register.js";
import Feed from "./FeedPage/Feed.js";
import posts from "./data/posts.json"

function App() {
  const [usersList, setusersList] = useState(users);
  const [logedinuser, setlogedinuser] = useState({ username: "" });
  const [postsList, setpostsList] = useState(posts);
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login usersList={usersList} setlogedinuser={setlogedinuser} />} />
        <Route
          path="/register"
          element={
            <Register usersList={usersList} setusersList={setusersList} />
          }
        />
        <Route
          path="/feed"
          element={<Feed usersList={usersList} logedinuser={logedinuser} postsList={postsList} setpostsList={setpostsList}/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
