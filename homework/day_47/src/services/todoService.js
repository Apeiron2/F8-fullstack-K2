import { client } from "../utils/clientUtils";
import { Cookie } from "../utils/cookieUtils";
import { login } from "./userService";

export const getTodos = async () => {
  const { response, data } = await client.get("/tasks");
  if (data.code == 401) {
    const { response, data } = await login(Cookie.get("email"));
    if (response.ok) {
      const { response, data } = await client.get("/tasks");
      localStorage.setItem("tasks", JSON.stringify(data.data));
      return { response, data };
    } else {
      // Đăng xuất
      console.log("Đăng xuất ", data);
    }
  }
  localStorage.setItem("tasks", JSON.stringify(data.data));
  return { response, data };
};

export const addTasks = async (body) => {
  const tasks = JSON.parse(localStorage.getItem("tasks")).tasks;
  let newTasks = tasks.map(({ column, columnName, content }) => {
    column, columnName, content;
  });
  tasks.push(body);
  console.log(body);
  const { response, data } = await client.post("/tasks", body);
  if (data.code == 401) {
    // refresh apikey
    const { response, data } = await login(Cookie.get("email"));
    if (response.ok) {
      const { response, data } = await client.post("/tasks", body);
      if (response.ok) {
        localStorage.setItem("tasks", body);
        return { response, data };
      } else {
        // Đăng xuất
        console.log("Đăng xuất ", data);
      }
    } else {
      // Đăng xuất
      console.log("Đăng xuất ", data);
    }
  }
  localStorage.setItem("tasks", body);
  return { response, data };
};

export const swapArray = (Array, active, over, type) => {
  let newArray;

  let activeIndex;
  let overIndex;
  if (type == "column") {
    // Để tìm được Index của column từ listTodo cần lấy _id trong thuộc tính column
    activeIndex = Array.findIndex(({ column: { _id } }) => _id === active.id);
    overIndex = Array.findIndex(({ column: { _id } }) => _id === over.id);
  } else {
    // Tìm Index của task trong array tasks thì không cần
    activeIndex = Array.findIndex(({ _id }) => _id === active.id);
    overIndex = Array.findIndex(({ _id }) => _id === over.id);
  }

  // Xử lý Array
  if (activeIndex <= overIndex) {
    newArray = Array.toSpliced(overIndex + 1, 0, active.data.current);
    newArray = newArray.toSpliced(activeIndex, 1);
  } else {
    newArray = Array.toSpliced(overIndex, 0, active.data.current);
    newArray = newArray.toSpliced(activeIndex + 1, 1);
  }
  return newArray;
};
