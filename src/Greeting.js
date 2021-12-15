import React from 'react';

export const a = 1;

const Greeting = ({ name, surname, symbolCount }) => {
  const range = [...Array(symbolCount).keys()];

  return (
    <h1>
      <span>Hello {name + ' ' + surname}</span>
      {
        (function f() {
          return range.map(() => <span>!</span>)
        })()
      }
    </h1>
  );
}

export default Greeting;
