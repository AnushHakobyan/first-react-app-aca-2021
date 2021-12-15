import React, { useState } from "react";
import CreateTodo from "./CreateTodo";
import ToDoList from "./ToDoList";

const ToDoContainer = () => {
  const [toDoList, setToDoList] = useState([]);

  const handleCreateNewItem = (toDo) => {
    setToDoList([...toDoList, toDo]);
  }

  return (
    <>
      <CreateTodo handleCreate={handleCreateNewItem} />
      <ToDoList toDoList={toDoList} />
    </>
  )
}

export default ToDoContainer;
