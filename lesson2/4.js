const sleep = (ms) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

sleep(5000).then(() => {
  console.log("Выполнилось через 5 секунд!");
});
