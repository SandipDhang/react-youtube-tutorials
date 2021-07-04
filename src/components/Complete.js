import React from "react";

const Complete = ({ tasks }) => {
  return tasks.length === 0 ? (
    <p>No Task added</p>
  ) : (
    <ul>
      {tasks.map((task, idx) => {
        return (
          <li key={idx}>
            <label>{task.task}</label>
          </li>
        );
      })}
    </ul>
  );
};

export default Complete;
