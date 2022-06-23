import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home/Home";
import {Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login/Login";

function App() {
  return (
    <div>
        <Routes>
          
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
    </div>
  );
}

export default App;
