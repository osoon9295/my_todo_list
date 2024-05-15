const Button = ({ children, onClick, color }) => {
  if (color) {
    return (
      <button
        style={{
          width: "fitContent",
          backgroundColor: color,
          color: "white",
          margin: "10px",
          padding: "10px 20px",
          border: "none",
          borderRadius: "20px",
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }

  return <button onClick={onClick}>{children}</button>;
};

export default Button;
