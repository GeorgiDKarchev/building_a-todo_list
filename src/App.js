import { useReducer } from "react";
//this import our data set
import { initialState } from "./data/todosData";
import {todosReducer} from "./reducers/todosReducer";
import ToDoList from "./components/ToDoList";
//import "./styles.css";

 function App() {
  const [todos, dispatch] = useReducer(todosReducer, initialState);
  return (
    <div className="App">
      <h1> React Todo App</h1>

      <ToDoList todos={todos} dispatch={dispatch} />
    </div>
  );
}

export default App;

