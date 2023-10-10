// Giao tiếp giữa Front-end và Back-end (HTTP Protocal)
// Back-end: Xây dựng API để các ứng dụng khác có thể thao tác: CRUD
// Front-end: Gọi API
// Thường thì API được xây dựng theo chuẩn RESTFul
/*
 - URL: Server API + resource
 => https://apeiron.id.vn/homeworks
 - HTTP Method:
 + GET -> Lấy dữ liệu
 + POST -> Thêm mới
 + PUT -> Sửa (Ghi đè)
 + PATCH -> Sửa ( Không ghi đè)
 + DELETE -> Xóa
 - Endpoint: Sự kết hợp giữa Method + Resource
 + GET /users
 + POST /users
 + GET /users/{id}
 - HTTP response Code:
 + Success: 200
 + Create: 201
 + Not Found: 404
 - HTTP response Message: JSON
- Sử dụng các dịch vụ mockup API
- SỬ dụn thư viện mockup API

Trong khóa học này học về JSON Server
 */

/**
 Cách để Front-end gọi đc API từ Back-end
 - XMLHttpRequest -> Cũ, không trả về promise
 - fetch -> mới, trả về promise
 - Thư viện: axios, jquery ajax,...

 Cơ chế:
 + Client Side Rendering (CSR)
 + Server Side Rendering (SSR)
 */
const port = 3000;
const url = `http://localhost:${port}/users`;

// fetch(url)
//   .then((res) => res.json())
//   .then((data) => {
//     document.body.innerHTML = data
//       .map(({ name, email }) => `<div><h2>${name}</h2><h2>${email}</h2></div>`)
//       .join("");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const getUser = async () => {
//   const res = await fetch(url);
//   const users = await res.json();
//   document.body.innerHTML = users.map(
//     ({ name, emai }) => `<div><h2>${name}</h2></div>`
//   );
// };
// getUser();

// const getUser = async (id) => {
//   const response = await fetch(url + `/${id}`);
//   const user = await response.json();
//   console.log(user);
// };
// getUser(2);

// const postUser = async (data) => {
//   //data là 1 object
//   const response = await fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });
//   console.log(response);
// };

// postUser({
//   name: "user 4",
//   email: "apeironisme@gmail.com",
// });

// const updateUser = async (data, id) => {
//   const response = await fetch(url + `/${id}`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });
//   console.log(response);
// };
// updateUser({ name: "Vũ Đức Tài" }, 1);

// const deleteUser = async (id) => {
//   const response = await fetch(url + `/${id}`, {
//     method: "DELETE",
//   });
//   console.log(response);
// };
// deleteUser(5);
