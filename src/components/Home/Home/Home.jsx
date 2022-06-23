import React from "react";
import Header from "../Header/Header";
import TodoBody from "../TodoBody/TodoBody";

const Home = ({ user }) => {
  return (
    <div>
      <Header user={user} />
      <TodoBody />
    </div>
  );
};

export default Home;
