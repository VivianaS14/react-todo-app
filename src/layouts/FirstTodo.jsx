import React from "react";

const FirstTodo = ({ theme }) => {
  return (
    <div
      className={`empty-todos ${
        theme ? "empty-todos-light" : "empty-todos-dark"
      }`}
    >
      <h3>Nothing to do...</h3>
    </div>
  );
};

export default FirstTodo;
