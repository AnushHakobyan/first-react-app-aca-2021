function getToDoList() {
  const toDoListPromise = new Promise(
    function (resolve) {
      setTimeout(() => {
        resolve([
          'Wake up',
          'Shower',
          'Drink Coffee',
          'Do Sport',
        ]);
      }, 3000);
    }
  );
  return toDoListPromise;
}

export default { getToDoList };