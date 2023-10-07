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
const url = `https://jsonplaceholder.typicode.com/posts`;

fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    userId: 11,
    id: 101,
    title: "Vũ Đức Tài",
    body: "lorem",
  }),
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

setTimeout(() => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data[100]);
    })
    .catch((err) => {
      console.log(err);
    });
}, 2000);
