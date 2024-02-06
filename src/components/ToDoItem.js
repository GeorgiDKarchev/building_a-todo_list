import { useState } from "react";

function ToDoItem({ todo, dispatch }) {
  const { title, completed } = todo;
  const [showEdit, setShowEdit] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  //
  const handleSave = () => {
    dispatch({ type: "EDIT_TODO", payload: { id: todo.id, title: newTitle } });
    setShowEdit(false);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      {showEdit ? (
        <>
          <input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <input
            type="checkbox"
            defaultChecked={completed}
            onChange={() =>
              dispatch({ type: "TOGGLE_COMPLETED", payload: { id: todo.id } })
            }
          />
          <h3>{title}</h3>
          <button onClick={() => setShowEdit(!showEdit)}>Edit</button>
          <button disabled ={completed}//adding disabled button when text input ctive
            onClick={() =>
              dispatch({ type: "DELETE_TODO", payload: { id: todo.id } })
            }
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
}

export default ToDoItem;
