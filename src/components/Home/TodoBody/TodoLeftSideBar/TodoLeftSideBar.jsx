import React from "react";
import "./TodoLeftSideBar.css";

const TodoLeftSideBar = () => {
  return (
    <>
      <ul className="sider-top sider-border">
        <li className="active-sider" style={{ color: "#1d4ed8" }}>
          <i className="fa-solid fa-calendar-day m-2"></i>
          Today <span className="ms-5">3/7</span>
        </li>
        <li>
          <i className="fa-solid fa-bars  m-2"></i>
          Tomorrow <span className="ms-5">4</span>
        </li>
        <li>
          <i className="fa-solid fa-bars  m-2 mb-4"></i>
          Overdue <span className="ms-5">4</span>
        </li>
      </ul>
      <ul className="sider-top sider-border">
        <li>
          <i className="fa-solid fa-bars  m-2"></i>
          Tomorrow <span className="ms-5">4</span>
        </li>
        <li>
          <i className="fa-solid fa-bars  m-2"></i>
          Home <span className="ms-5">1</span>
        </li>
        <li>
          <i className="fa-solid fa-bars  m-2"></i>
          Office <span className="ms-5">6</span>
        </li>
        <li>
          <i className="fa-solid fa-bars  m-2"></i>
          Travel <span className="ms-5">0</span>
        </li>
      </ul>
    </>
  );
};

export default TodoLeftSideBar;
