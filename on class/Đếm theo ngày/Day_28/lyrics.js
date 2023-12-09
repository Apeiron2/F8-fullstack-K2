fetch("./data.json")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch(console.log("Lỗi kết nối file JSON"));
