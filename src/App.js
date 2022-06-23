import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home/Home";
import {Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login/Login";

function App() {
  const [user, setUser] = useState("");

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home user={user} />}></Route>
        <Route path="/home" element={<Home user={user} />}></Route>
        <Route path="/login" element={<Login setUser={setUser} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
