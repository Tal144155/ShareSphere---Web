import "./App.css";
import Login from "./LoginPage/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import users from "./data/users.json";
import { useState } from "react";
import Slogen from "./Slogen";

function App() {
  const [usersList, setusersList] = useState(users);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login usersList={usersList} />} />
        <Route path="/register" element={<Slogen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
