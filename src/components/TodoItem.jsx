import React from 'react';


const styles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  letterSpacing: "1px",
  marginBottom: "10px"
}
const TodoItem = ({ children }) => {
  return (
    <div style={styles} className="todo-item-row">{children}</div>
  );
}

export default TodoItem;