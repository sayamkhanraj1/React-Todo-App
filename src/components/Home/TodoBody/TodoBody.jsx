import React from "react";
import TodoLeftSideBar from "./TodoLeftSideBar/TodoLeftSideBar";
import TodoRightBody from "./TodoRightBody/TodoRightBody";

const TodoBody = () => {
  return (
      <div className="row container">
        <div className="col-md-3">
          <TodoLeftSideBar />
        </div>
        <div className="col-md-9">
          <TodoRightBody />
        </div>
      </div>
  );
};

export default TodoBody;
