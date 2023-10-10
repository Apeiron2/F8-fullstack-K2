import { client } from "./client.js";

// const getPosts = async () => {
//   const { response } = await client.get(`/posts`);
//   console.log(response);
// };
// getPosts();
const method = "POST";
fetch(`http://localhost:3000/users`, {
  method,
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Vũ Đức Tài",
    email: "apeironisme@gmail.com",
  }),
})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
