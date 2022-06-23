import React, { useState, useEffect } from "react";
import "./TodoRightBody.css";
const TodoRightBody = () => {
  
  const [todoTasks, setTodoTasks] = useState([]);

  useEffect(() => {
    fetch("https://peaceful-badlands-86895.herokuapp.com/addTodo")
      .then((response) => response.json())
      .then((data) => setTodoTasks(data));
  }, [todoTasks]);
  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure to delete Task?");
    if (confirm) {
      fetch(`https://peaceful-badlands-86895.herokuapp.com/addTodo/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = todoTasks.filter((todoTask) => todoTask._id !== id);
          setTodoTasks(remaining);
        });
    }
  };
  return (
    <div>
      <h2
        style={{
          fontSize: "24px",
          color: "#111827",
          marginTop: "30px",
          fontWeight: "700",
          marginBottom: "15px",
        }}
      >
        Today
      </h2>
      <div className="wrapper">
        <div className="task-input">
          <i className="fa-solid fa-plus"></i>
          <input type="text" placeholder="Add new task" />
        </div>
      </div>
      {todoTasks.map((todoTask) => (
        <ul key={todoTask._id} className="task-box">
          <li className="task">
            <label htmlFor="1">
              <input type="checkbox" id="1" />
              <p>{todoTask.task}</p>
            </label>
            <div className="settings">
              <i className="fa fa-ellipsis-h"></i>
              <ul className="task-menu">
                <li>
                  <i className="fa fa-pen"></i>Edit
                </li>
                <li onClick={() => handleDelete(todoTask?._id)}>
                  <i className="fa fa-trash"
                  ></i>
                  Delete
                </li>
              </ul>
            </div>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default TodoRightBody;
