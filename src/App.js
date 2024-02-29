import "./App.css";
import Login from "./LoginPage/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import users from "./data/users.json";
import { useState } from "react";
import Register from "./RegisterPage/Register.js";
import Feed from "./FeedPage/Feed.js";
import posts from "./data/posts.json";
import ProfilePage from "./ProfilePage/ProfilePage.js";

function App() {
  //creating useState for the userslist, for the logedIn user, and for the posts ist so they can be accesed from all components
  const [usersList, setusersList] = useState(users);
  const [logedinuser, setlogedinuser] = useState({
    username: "",
    first_name: "",
    last_name: "",
    user_pic: "",
  });
  const [postsList, setpostsList] = useState(posts);
  const [token, settoken] = useState("");

  const [watchUser, setWatchUser] = useState({ username: "" });

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Login
              usersList={usersList}
              setlogedinuser={setlogedinuser}
              settoken={settoken}
            />
          }
        />
        <Route
          path="/register"
          element={
            <Register usersList={usersList} setusersList={setusersList} />
          }
        />
        {logedinuser.username ? (
          <Route
            path="/feed"
            element={
              <Feed
                usersList={usersList}
                setlogedinuser={setlogedinuser}
                logedinuser={logedinuser}
                postsList={postsList}
                setpostsList={setpostsList}
                token={token}
              />
            }
          />
        ) : (
          <Route
            path="/feed"
            element={
              <Login
                usersList={usersList}
                setlogedinuser={setlogedinuser}
                settoken={settoken}
              />
            }
          />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
