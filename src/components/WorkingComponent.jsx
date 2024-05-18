import React from "react";
import TodoItemComponent from "./TodoItemComponent";

const WorkingComponent = ({ todos, deleteHandler, toggleHandler }) => {
  return (
    <div>
      {todos
        .filter((todo) => {
          return todo.condition === "working";
        })
        .map((todo) => {
          return (
            <TodoItemComponent
              key={todo.id}
              todo={todo}
              deleteHandler={deleteHandler}
              toggleHandler={toggleHandler}
            />
          );
        })}
    </div>
  );
};

export default WorkingComponent;
