const ToDoList = ({ toDoList }) => {
  return (
    <ul>
      {toDoList.map((toDoItem) => (
        <li key={toDoItem}>{toDoItem}</li>
        ))}
    </ul>
  );
}

export default ToDoList;