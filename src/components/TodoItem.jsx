const TodoItem = ({ todo, setTodos }) => {
  const { title, content, id } = todo;

  const deleteHandler = () => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleHandler = () => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const cardStyle = {
    width: "500px",
    height: "centent",
    border: "2px solid gray",
    borderRadius: "10px",
    padding: "20px",
    margin: "10px",
  };

  return (
    <div style={cardStyle}>
      <h2>{title}</h2>
      <pre>{content}</pre>
      <button onClick={deleteHandler}>삭제하기</button>
      <button onClick={toggleHandler}>{todo.isDone ? "취소" : "완료"}</button>
    </div>
  );
};

export default TodoItem;
