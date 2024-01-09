import express from "express";
import session from "express-session";
import flash from "connect-flash/lib/flash.js";
import expressLayouts from "express-ejs-layouts";
import bodyParser from "body-parser";
import routerIndex from "./routers/index.js";
import routerUsers from "./routers/users.js";
import routerAuth from "./routers/auth.js";
import authMiddleware from "./middlewares/auth.middlewares.js";
const app = express();

const port = 8080;
const hostname = "localhost";
// static file
app.use(express.static("public"));
app.set("views", "./views");
app.set("view engine", "ejs");

app.use(
  session({
    name: "f8_session_id",
    secret: "f8",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(flash());
app.use(expressLayouts);
app.set("layout", "layouts/layout"); // thiết lập layout mặc định
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(routerAuth);
// app.use(authMiddleware);
app.use(routerIndex);
app.use("/users", routerUsers);
app.use((req, res) => {
  res.send("<h1>page not found</h1>");
});
app.listen(port, hostname, () => {
  console.log("Chạy thành công = " + port);
});
