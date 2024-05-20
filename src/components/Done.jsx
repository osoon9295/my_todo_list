import React from "react";
import TodoItem from "./TodoItem";

const Done = ({ todos, deleteHandler, toggleHandler }) => {
  return (
    <div>
      <h2>🎉 Done!!!</h2>
      <div>
        {todos
          .filter((todo) => {
            return todo.condition === "done";
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

export default Done;
