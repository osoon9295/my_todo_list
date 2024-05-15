import React, { useState } from "react";

const AddComponent = ({ setTodos, todos }) => {
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
    setTitle("");
    setContent("");
    setTodos([...todos, newTodo]);

    // localStorage.setItem("newTodo");
  };
  return (
    <div>
      <form onSubmit={addHandler} id="dd">
        <div id="inputs">
          <label htmlFor="titleInput">
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
          <label htmlFor="contentInput">
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
        <button>일정추가하기</button>
      </form>
    </div>
  );
};

export default AddComponent;
