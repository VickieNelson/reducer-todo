import React, { useReducer } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  // const [state, dispatch] = useReducer(reducer, todo);
  return (
    <div className='App'>
      <h1>My Tasks</h1>
      <div className='TodoContainer'>
        {/* import form */}
        <TodoList />
      </div>
    </div>
  );
}

export default App;
