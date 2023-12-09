const http = require("http");
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end("<h1>Ảo ma Canada</h1>");
});
const hostname = "localhost";
const port = 5000;
server.listen(port, hostname, () => {
  // Chạy thành công thì callback được gọi
  console.log(`Đã chạy thành công với ${port}`);
});
