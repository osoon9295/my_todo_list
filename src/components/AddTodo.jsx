import React, { useState } from "react";

const AddTodo = ({ setTodos }) => {
  const addHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const title = formData.get("titleInput");
    const content = formData.get("contentInput");

    if (!title.trim() || !content.trim())
      return alert("제목과 내용을 입력해주세요");

    const nextTodo = {
      id: crypto.randomUUID(),
      title: title,
      content: content,
      isDone: false,
    };

    e.target.reset();

    setTodos((prevTodos) => [nextTodo, ...prevTodos]);
  };

  return (
    <div>
      <form onSubmit={addHandler}>
        <div id="inputs">
          <label htmlFor="titleInput">
            <p>제목</p>
            <input className="input_box" name="titleInput" type="text" />
          </label>
          <label htmlFor="contentInput">
            <p>내용</p>
            <textarea
              cols="100"
              wrap="hard"
              className="input_box"
              name="contentInput"
            />
          </label>
        </div>
        <button>일정추가하기</button>
      </form>
    </div>
  );
};

export default AddTodo;
