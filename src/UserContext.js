import React from 'react';

const userData = {
  name: 'Guest User',
};

const UserContext = React.createContext(userData);

export default UserContext;
export { userData }