import Button from "./Button";

const Todo = ({ todo, deleteHandler, toggleHandler }) => {
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
      <h2>{title}</h2>
      <p>
        <pre>{content}</pre>
      </p>
      <Button color="gray" onClick={() => deleteHandler(id)}>
        삭제하기
      </Button>
      <Button color="black" onClick={() => toggleHandler(id)}>
        {todo.condition === "working" ? "완료" : "취소"}
      </Button>
    </div>
  );
};

export default Todo;
