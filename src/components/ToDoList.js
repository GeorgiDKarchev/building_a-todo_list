import { useState } from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({ todos, dispatch }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ 
    type: "ADD_TODO", 
    payload: { title } });
    setTitle("");
  };

  return (
    <div>
      <h1> Todo List</h1>

      <form
        onSubmit={handleSubmit}
        // style={{ display: "flex", gap: "10px", marginBottom: "10px" }}
      >
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add new task"
        />
        <button type="submit">Add Todo</button>
      </form>

      {todos?.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </div>
  );
}

export default ToDoList;
