import React, { useState, useReducer } from "react";
// import TodoList from "./TodoList";

const TodoForm = (props) => {
  const [newTodo, setNewTodo] = useState("");

  const handleChanges = (e) => {
    setNewTodo(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    setNewTodo("");
    props.dispatch({
      type: "ADD_TODO",
      payload: { item: newTodo, completed: false, id: Date.now() },
    });
    setNewTodo("");
  };

  const clearCompleted = (event) => {
    console.log("say hello");
    event.preventDefault();
    props.dispatch({ type: "CLEAR" });
  };

  return (
    <div>
      <form className='todo-form'>
        <input
          className='todo-input'
          type='text'
          autoFocus
          value='Enter Task'
          name='newtodotext'
          value={newTodo}
          onChange={handleChanges}
        />
      </form>
      <button className='button' onClick={addTodo}>
        Add Todo
      </button>
      <button className='button' onClick={clearCompleted}>
        Clear Task
      </button>
    </div>
  );
};

export default TodoForm;
