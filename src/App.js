import "./App.css";
import Login from "./LoginPage/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import users from "./data/users.json";
import { useState } from "react";
import Register from './RegisterPage/Register.js'

function App() {
  const [usersList, setusersList] = useState(users);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login usersList={usersList} />} />
        <Route path="/register" element={<Register usersList={usersList} setusersList={setusersList} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
