const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    const data = { id: 1, name: "john doe" };
    resolve(data);
  }, 1000);
});
fetchData
  .then((data) => {
    console.log("data received: ", data);
    return data.id;
  })
  .then((id) => {
    console.log("id: ", id);
  });
fetchData
  .then((data) => {
    return data.name;
  })
  .then((name) => {
    console.log("name: ", name);
  })
  .catch((error) => {
    console.error("error", error);
  });
