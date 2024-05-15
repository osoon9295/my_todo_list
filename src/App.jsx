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

    // localStorage.setItem("newTodo");
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

  const renderTodos = (condition) => {
    return todos
      .filter((todo) => todo.condition === condition)
      .map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteHandler={deleteHandler}
          toggleHandler={toggleHandler}
        />
      ));
  };

  return (
    <div id="layOut">
      <header>
        <h1>My Todo List</h1>
      </header>
      <form>
        <div id="inputs">
          <label for="titleInput">
            <p>제목</p>
            <input
              className="input_box"
              name="titleInput"
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </label>
          <label for="contentInput">
            <p>내용</p>
            <textarea
              cols="100"
              wrap="hard"
              className="input_box"
              name="contentInput"
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
            />
          </label>
        </div>
        <Button color="gray" onClick={addHandler}>
          일정추가하기
        </Button>
      </form>
      <div className="cardZone">
        <h2>🔥 Working...</h2>
        {renderTodos("working")}
      </div>
      <div className="cardZone">
        <h2>🎉 Done!!!</h2>
        {renderTodos("done")}
      </div>
    </div>
  );
};

export default App;
