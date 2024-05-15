import React, { useState } from "react";
import AddComponent from "./components/AddComponent";
import WorkingComponent from "./components/WorkingComponent";
import DoneComponent from "./components/DoneComponent";

const App = () => {
  const [todos, setTodos] = useState([]);

  const deleteHandler = (id) => {
    const deletedTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(deletedTodos);
  };

  const toggleHandler = (id) => {
    const doneTodos = todos.map((todo) => {
      if (todo.id === id && todo.condition === "working") {
        return { ...todo, condition: "done" };
      } else if (todo.id === id && todo.condition === "done") {
        return { ...todo, condition: "working" };
      } else {
        return todo;
      }
    });
    setTodos(doneTodos);
  };

  return (
    <div id="layOut">
      <header>
        <h1>My Todo List</h1>
      </header>
      <AddComponent todos={todos} setTodos={setTodos} />
      <div className="cardZone">
        <h2>🔥 Working...</h2>
        <WorkingComponent
          todos={todos}
          deleteHandler={deleteHandler}
          toggleHandler={toggleHandler}
        />
      </div>
      <div className="cardZone">
        <h2>🎉 Done!!!</h2>
        <DoneComponent
          todos={todos}
          deleteHandler={deleteHandler}
          toggleHandler={toggleHandler}
        />
      </div>
    </div>
  );
};

export default App;
