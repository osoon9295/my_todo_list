const TodoItemComponent = ({ todo, deleteHandler, toggleHandler }) => {
  const cardStyle = {
    width: "500px",
    height: "centent",
    border: "2px solid gray",
    borderRadius: "10px",
    padding: "20px",
    margin: "10px",
  };

  const { title, content, id } = todo;

  return (
    <div style={cardStyle}>
      <h2>T1 결승진출</h2>
      <p>BLG를 3대 0으로 잡고 젠지 3대0으로 잡고우승</p>
      {/* <h2>{title}</h2>
      <pre>{content}</pre> */}
      <button onClick={() => deleteHandler(id)}>삭제하기</button>
      <button onClick={() => toggleHandler(id)}>
        {todo.condition === "working" ? "완료" : "취소"}
      </button>
    </div>
  );
};

export default TodoItemComponent;
