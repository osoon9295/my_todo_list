import React from "react";
import TodoItem from "./TodoItem";

const Working = ({ todos, deleteHandler, toggleHandler }) => {
  return (
    <div>
      <h2>🔥 Working...</h2>
      <div>
        {todos
          .filter((todo) => {
            return todo.condition === "working";
          })
          .map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                deleteHandler={deleteHandler}
                toggleHandler={toggleHandler}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Working;
