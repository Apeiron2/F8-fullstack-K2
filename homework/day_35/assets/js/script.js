import { client } from "./client.js";

const container = document.querySelector(".container");
const searchAddDiv = container.querySelector(".search-add-container");
const addTodoBtn = searchAddDiv.querySelector(".add button");
const todosList = container.querySelector(".todos");
const todosDoneList = container.querySelector(".todos-done");
const showDoneBtn = container.querySelector(".show-done button");
const quantityDone = showDoneBtn.querySelector(".quantity");

//add Todo
const addTodoForm = container.querySelector(".add-todo-form");
const newTodo = addTodoForm.querySelector("input");
const saveBtn = addTodoForm.querySelector(".action .save");
const cancelBtn = addTodoForm.querySelector(".action .cancel");
const overlay = container.querySelector(".overlay");

// Bật, tắt form todo
function hiddenAddForm() {
  addTodoForm.style.display = "none";
  overlay.style.display = "none";
  newTodo.value = "";
}
function showAddForm() {
  addTodoForm.style.display = "flex";
  overlay.style.display = "block";
}
addTodoBtn.addEventListener("click", function () {
  showAddForm();
});
overlay.addEventListener("click", function () {
  hiddenAddForm();
});
//

// Làm việc với form todos
cancelBtn.addEventListener("click", function () {
  hiddenAddForm();
});
saveBtn.addEventListener("click", function () {
  if (addTodoForm.classList.contains("edit")) {
    client
      .patch(`/todos/${addTodoForm.id}`, {
        content: newTodo.value,
      })
      .then(() => {
        hiddenAddForm();
        handleTodosList();
        addTodoForm.classList.remove("edit");
      });
  } else {
    client
      .post("/todos", {
        content: newTodo.value,
        status: 0,
      })
      .then(() => {
        hiddenAddForm();
        handleTodosList();
      });
  }
});
//

// Tạo giao diện todo
const todoComponent = (data) => {
  const { content, id, status } = data;
  const todo = document.createElement("div");
  todo.classList.add("todo");
  todo.id = id;
  const p = document.createElement("p");
  p.classList.add("content");
  p.innerText = content;
  todo.append(p);
  todo.innerHTML += `<div class="feature">
  <div class="del"><i class="fa-solid fa-trash-can"></i></div>
  <div class="edit"><i class="fa-solid fa-pen-to-square"></i></div>
  <div class="complete">
    <i class="fa-solid fa-square-check"></i>
  </div>
  </div>`;
  if (status) {
    todo.querySelector(".complete").classList.add("done");
  }
  addFeature(todo);
  return todo;
};
//

// Show completed todos
showDoneBtn.addEventListener("click", function () {
  this.classList.toggle("active");
  todosDoneList.classList.toggle("show");
});

// Hàm Cập nhật danh sách Todos
function handleTodosList() {
  todosList.innerHTML = "";
  todosDoneList.innerHTML = "";
  client
    .get("/todos")
    .then(({ data }) => {
      data.forEach((todo) => {
        if (!todo.status) {
          todosList.append(todoComponent(todo));
        } else {
          todosDoneList.append(todoComponent(todo));
        }
      });
    })
    .then(() => {
      handleCompleted();
    })
    .catch((err) => {
      console.log(err);
    });
}
function handleCompleted() {
  client
    .get("/todos")
    .then(({ data }) => {
      const doneList = data.filter((todo) => {
        if (todo.status) return todo;
      });
      return doneList;
    })
    .then((doneList) => {
      quantityDone.innerHTML = doneList.length;
    })
    .catch((err) => console.log(err));
}
handleTodosList();
//

//Thao tác với todo object
function addFeature(todo) {
  const feature = todo.querySelector(".feature");
  const delBtn = feature.querySelector(".del");
  const editBtn = feature.querySelector(".edit");
  const completeBtn = feature.querySelector(".complete");

  //Chức năng xóa
  delBtn.addEventListener("click", function () {
    const id = todo.id;
    client
      .delete(`/todos/${id}`)
      .then(({ response }) => {
        console.log(response.status);
      })
      .then(() => {
        handleTodosList();
      })
      .catch((err) => {
        console.log(err);
      });
  });
  // Xong. Chức năng xóa

  // Chức năng chỉnh sửa
  editBtn.addEventListener("click", function () {
    newTodo.value = todo.querySelector(".content").innerText;
    showAddForm();
    addTodoForm.classList.add("edit");
    addTodoForm.id = todo.id;
  });
  // Xong. Chức năng chỉnh sửa.

  // Chức năng hoàn thành
  completeBtn.addEventListener("click", function () {
    const id = todo.id;
    if (this.classList.contains("done")) {
      client.patch(`/todos/${id}`, { status: 0 }).then(() => {
        handleTodosList();
      });
    } else {
      client.patch(`/todos/${id}`, { status: 1 }).then(() => {
        handleTodosList();
      });
    }
  });
  // Xong. Chức năng hoàn thành
}
