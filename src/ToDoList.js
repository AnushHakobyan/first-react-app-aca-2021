const ToDoList = ({ data }) => {
  return (
    <ul>
      {data && data.map((toDoItem) => (
        <li key={toDoItem}>{toDoItem}</li>
        ))}
    </ul>
  );
}

export default ToDoList;