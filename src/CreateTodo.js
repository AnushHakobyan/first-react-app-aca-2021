import React, { useState } from 'react';

// function customUseState(initialValue) {
//   let value = initialValue;
//
//   const setValue = function (newValue) {
//     value = newValue;
//   }
//
//   return [value, setValue];
// }

const CreateTodo = ({ handleCreate }) => {
  const [toDoItem, setToDoItem] = useState('');

  const handleClick = () => {
    if (toDoItem) {
      handleCreate(toDoItem);
      setToDoItem('');
    }
  };

  const handleChange = (e) => {
    setToDoItem(e.currentTarget.value);
  };
  return (
    <React.Fragment>
      <input value={toDoItem} onChange={handleChange} placeholder="Enter Todo" />
      <button onClick={handleClick}>Create Todo</button>
    </React.Fragment>
  );
}

export default CreateTodo;