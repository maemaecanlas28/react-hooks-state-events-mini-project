import React from "react";

function Task({ text, category, handleDelete, index }) {

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={(e) => handleDelete(e, index)}>X</button>
    </div>
  );
}

export default Task;
