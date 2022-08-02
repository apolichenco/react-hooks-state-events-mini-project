import React from "react";

function Task({ text, category}) {

function deleteTask(event) {
  event.target.parentNode.parentNode.removeChild(event.target.parentNode)
}

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={deleteTask}>X</button>
    </div>
  );
}

export default Task;
