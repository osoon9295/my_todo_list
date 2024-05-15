import Button from "./Button";

const Todo = ({ todo, deleteHandler, toggleHandler }) => {
  const cardStyle = {
    width: "300px",
    height: "centent",
    backgroundColor: "beige",
    border: "2px solid green",
    borderRadius: "10px",
  };

  const { title, content, id } = todo;

  return (
    <div style={cardStyle}>
      <h1>{title}</h1>
      <p>{content}</p>
      <Button color="green" onClick={() => deleteHandler(id)}>
        삭제하기
      </Button>
      <Button onClick={() => toggleHandler(id)}>
        {todo.condition === "working" ? "완료" : "취소"}
      </Button>
    </div>
  );
};

export default Todo;
