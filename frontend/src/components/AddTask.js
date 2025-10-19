import React, { useState } from "react";

function AddTask({ onAdd }) {
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    onAdd(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Add task..." value={title} onChange={(e) => setTitle(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTask;
