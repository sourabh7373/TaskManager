import React from "react";

function TaskItem({ task, onUpdate, onDelete }) {
  return (
    <li>
      <input type="checkbox" checked={task.completed} onChange={() => onUpdate(task._id, !task.completed)} />
      {task.title}
      <button onClick={() => onDelete(task._id)}>Delete</button>
    </li>
  );
}

export default TaskItem;
