import React, { useState } from "react";
import Todo from "./components/Todo";
import Button from "./components/Button";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      id: new Date().getTime(),
      title: title,
      content: content,
      condition: "working",
    };
    setTodos([...todos, newTodo]);
  };

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

  const headerStyle = {
    backgroundColor: "gray",
    display: "flex",
    justifyContent: "space-between",
    border: "1px solid black",
  };

  const formStyle = {
    backgroundColor: "pink",
    display: "flex",
    justifyContent: "space-between",
  };

  return (
    <div>
      <header style={headerStyle}>
        <h1>My Todo List</h1>
        <div>React</div>
      </header>
      <form style={formStyle}>
        <div>
          <label>
            제목
            <input
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </label>
          <label>
            내용
            <input
              type="text"
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
            />
          </label>
        </div>
        <Button onClick={addHandler}>추가하기</Button>
      </form>
      <div>
        <h2>🔥 Working...</h2>
        {todos
          .filter((todo) => {
            return todo.condition === "working";
          })
          .map((todo) => {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                deleteHandler={deleteHandler}
                toggleHandler={toggleHandler}
              />
            );
          })}
      </div>
      <div>
        <h2>🎉 Done!!!</h2>
        {todos
          .filter((todo) => {
            return todo.condition === "done";
          })
          .map((todo) => {
            return (
              <Todo
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

export default App;
