import React from "react";

const Error = ({ theme }) => {
  return (
    <div
      className={`error-todos ${
        theme ? "error-todos-light" : "error-todos-dark"
      }`}
    >
      <h3>Upps! Error, Please try later....</h3>
    </div>
  );
};

export default Error;
