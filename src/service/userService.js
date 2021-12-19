function getUserData() {
  const userPromise = new Promise(
    function (resolve) {
      setTimeout(() => {
        resolve('Vladimir Vladimirovich');
      }, 2000);
    }
  );
  return userPromise;
}

export default { getUserData };