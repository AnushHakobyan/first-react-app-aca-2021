import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
import Title from './Ttitle';
import ToDoContainer from './ToDoContainer';


function App() {
  return (
    <div>
      <Header />
      <Content titleComponent={Title} />
      <ToDoContainer />
    </div>
  );
}

export default App;


// <div className="App">
//   <Greeting // Greeting({ name, surname, symbolCount })
//     name="Vladimir"
//     surname="Vladimirovich"
//     symbolCount={3}
//   />
// </div>