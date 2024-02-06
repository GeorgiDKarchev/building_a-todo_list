import { useReducer } from "react";
import { initialState } from "./data/ToDoData";
import { todosReducer } from "./reducers/todosReducer";
import TodosList from "./components/ToDoList";
//import "./styles.css";

 function App() {
  const [todos, dispatch] = useReducer(todosReducer, initialState);
  return (
    <div className="App">
      <h1>Todo App</h1>

      <TodosList todos={todos} dispatch={dispatch} />
    </div>
  );
}

export default App;