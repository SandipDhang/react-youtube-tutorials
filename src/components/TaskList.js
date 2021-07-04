import React from "react";

const TaskList = ({ tasks, onComplete }) => {
  return tasks.length === 0 ? (
    <p>No Task added</p>
  ) : (
    <ul>
      {tasks.map((task, idx) => {
        return (
          <li key={idx}>
            <label>
              <input type="checkbox" onChange={() => onComplete(task)} />
              {task.task}
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;
