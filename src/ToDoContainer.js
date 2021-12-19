import React, { useState } from "react";
import CreateTodo from "./CreateTodo";
import ToDoList from "./ToDoList";
import withData from "./withData";
import toDoListService from "./service/toDoListService";

const ToDoListWithData = withData(ToDoList, toDoListService.getToDoList);

const ToDoContainer = () => {
  const [toDoList, setToDoList] = useState([]);

  const handleCreateNewItem = (toDo) => {
    setToDoList([...toDoList, toDo]);
  }

  return (
    <>
      <CreateTodo handleCreate={handleCreateNewItem} />
      <ToDoListWithData />
    </>
  )
}

export default ToDoContainer;
