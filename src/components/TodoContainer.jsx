import React, { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

// import Working from "./Working";
// import Done from "./Done";

const TodoContainer = () => {
  const [todos, setTodos] = useState([]);

  // const deleteHandler = (id) => {
  //   const deletedTodos = todos.filter((todo) => {
  //     return todo.id !== id;
  //   });
  //   setTodos(deletedTodos);
  // };

  // const toggleHandler = (id) => {
  //   const doneTodos = todos.map((todo) => {
  //     if (todo.id === id && todo.condition === "working") {
  //       return { ...todo, condition: "done" };
  //     } else if (todo.id === id && todo.condition === "done") {
  //       return { ...todo, condition: "working" };
  //     } else {
  //       return todo;
  //     }
  //   });
  //   setTodos(doneTodos);
  // };

  const workingTodos = todos.filter((todo) => !todo.isDone);
  const doneTodos = todos.filter((todo) => todo.isDone);

  return (
    <div>
      <header>
        <h1>My Todo List</h1>
      </header>
      <AddTodo todos={todos} setTodos={setTodos} />
      <TodoList todos={workingTodos} setTodos={setTodos} title="working" />
      <TodoList todos={doneTodos} setTodos={setTodos} title="done" />
    </div>
  );
};

export default TodoContainer;
