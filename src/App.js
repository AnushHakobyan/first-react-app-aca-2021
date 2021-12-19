import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
import Title from './Ttitle';
import ToDoContainer from './ToDoContainer';
import userService from './service/userService';

function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      setIsLoading(true);
      const userData = await userService.getUserData();
      setUser(userData);
      setIsLoading(false);
    }
    getUser();
  }, [userService.getUserData]);

  return (
    <div>
      <Header />
      {
        isLoading
          ? <div>...Loading...</div>
          : (
            <Content
              user={user}
              renderTitle={(name) => <Title name={name} />}
            />)
      }
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