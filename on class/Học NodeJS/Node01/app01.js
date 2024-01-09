import http from "http";
import uRL from "url";
import { getEmail, getName } from "./utils/functions.js";
const server = http.createServer((req, res) => {
  //req
  const url = req.url;
  const parsed = uRL.parse(url, true);
  const method = req.method;
  const userAgent = req.headers["user-agent"];
  let content;
  if (url === "/") {
    content = `<h1>Home</h1>`;
    res.setHeader("Set-Cookie", "name=Vu; path=/; max-age=86400; HttpOnly");
  } else if (parsed.pathname === "/gioi-thieu") {
    content = `<h1>Giới thiệu</h1>`;
    const searchParams = new URLSearchParams(parsed.search);
    content = `<h1>${searchParams.get("keyword")}</h1>
    <h1>${searchParams.get("id")}</h1>`;
  } else {
    res.statusCode = 404;
    content = "Page not found";
  }
  //res
  res.setHeader("Content-Type", "text/html; charset=utf-8");

  res.end(`<h1>${getName()}</h1>
  <p>${getEmail()}</p>
  <p>${parsed.pathname}</p>
  <p>${content}</p>`);
});
const hostname = "localhost";
const port = 5000;
server.listen(port, hostname, () => {
  // Chạy thành công thì callback được gọi
  console.log(`Đã chạy thành công với ${port}`);
});
