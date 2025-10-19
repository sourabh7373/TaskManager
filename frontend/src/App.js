import React, { useEffect, useState } from "react";
import { getTasks, addTask, updateTask, deleteTask } from "./api/api";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await getTasks();
    setTasks(res.data);
  };

  useEffect(() => { fetchTasks(); }, []);

  const handleAdd = async (title) => { await addTask(title); fetchTasks(); };
  const handleUpdate = async (id, completed) => { await updateTask(id, completed); fetchTasks(); };
  const handleDelete = async (id) => { await deleteTask(id); fetchTasks(); };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Task Manager</h1>
      <AddTask onAdd={handleAdd} />
      <TaskList tasks={tasks} onUpdate={handleUpdate} onDelete={handleDelete} />
    </div>
  );
}

export default App;
