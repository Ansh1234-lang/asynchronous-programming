function fetchData(callback) {
  setTimeout(() => {
    const data = { id: 1, name: "john doe" };
    callback(data);
  }, 1000);
}

fetchData((data) => {
  console.log("data recived: ", data);
});

