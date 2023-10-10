import { client } from "./client.js";

const container = document.querySelector(".container");
const searchAddDiv = container.querySelector(".search-add-container");
const searchBtn = searchAddDiv.querySelector(".search label");
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
addTodoBtn.addEventListener("click", function () {
  showAddForm();
});
function hiddenAddForm() {
  addTodoForm.style.display = "none";
  overlay.style.display = "none";
}
function showAddForm() {
  addTodoForm.style.display = "flex";
  overlay.style.display = "block";
}
overlay.addEventListener("click", function () {
  hiddenAddForm();
});
cancelBtn.addEventListener("click", function () {
  hiddenAddForm();
});
saveBtn.addEventListener("click", function () {
  client.post("/todos", {
    content: newTodo.value,
    status: 0,
  });
  hiddenAddForm();
  newTodo.value = "";
  handleTodosList();
});
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

showDoneBtn.addEventListener("click", function () {
  this.classList.toggle("active");
  todosDoneList.classList.toggle("show");
});

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
//feature

function addFeature(todo) {
  const feature = todo.querySelector(".feature");
  const delBtn = feature.querySelector(".del");
  const editBtn = feature.querySelector(".edit");
  const completeBtn = feature.querySelector(".complete");
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
  editBtn.addEventListener("click", function () {
    newTodo.value = todo.querySelector(".content").innerText;
    showAddForm();
    console.log("nhận");
  });
  completeBtn.addEventListener("click", function () {
    const id = todo.id;
    if (this.classList.contains("done"))
      client.patch(`/todos/${id}`, { status: 0 });
    else client.patch(`/todos/${id}`, { status: 1 });
    handleTodosList();
  });
}
