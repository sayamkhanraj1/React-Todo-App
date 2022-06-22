import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ closeModal }) => {
  const [stateData, setStateData] = useState({});

  const OnChangefn = (e) => {
    const newData = stateData;
    newData[e.target.name] = e.target.value;
    setStateData(newData);
  };

  const onSubmit = (data) => {
    console.log(data, "dflkajflajf");
    fetch("http://localhost:5000/addTodo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        alert("Task Added");
      });
  };
  return (
    <div className="modal-background">
      <div className="modal-container">
        <div>
          <h5 className="titel">Add Task</h5>
        </div>
        <div>
          <div className="modal-body">
            <p>What are you upto?</p>
            <form>
              <input
                name="task"
                onChange={(e) => OnChangefn(e)}
                type="text"
                placeholder="Breif text for what you want to accomplish."
              />
              <p>When do you want to complete it?</p>
              <input
                name="date"
                onChange={(e) => OnChangefn(e)}
                type="date"
                placeholder="Date in DD/MM/YY"
              />
            </form>
          </div>
          <p>Tags</p>
          <input
            value="Personal"
            name="category"
            onClick={(e) => OnChangefn(e)}
            type="button"
            className="modal-tagbtn-active"
          ></input>
          <input
            value="Home"
            name="category"
            onClick={(e) => OnChangefn(e)}
            type="button"
            className="modal-tagbtn"
          ></input>
          <input
            value="Office"
            name="category"
            onClick={(e) => OnChangefn(e)}
            type="button"
            className="modal-tagbtn"
          ></input>
        </div>
        <div className="footer">
          <button className="modal-cancelbtn" onClick={() => closeModal(false)}>
            Cancel
          </button>
          <button
            onClick={() => onSubmit(stateData)}
            className="modal-addbtn"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
