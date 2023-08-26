var todosForm = document.querySelector(".todosForm");
var main = document.querySelector("main");

todosForm.addEventListener("submit", function (event) {
  event.preventDefault();
  addTask();
});

function createEditFormNode(index, content) {
  var editForm = document.createElement("form");
  editForm.className = "todosForm";
  editForm.id = `id${index}`;
  editForm.innerHTML = `<form class="todosForm">
      <input type="text" value="${content}" />
      <button>Add Task</button>
    </form>`;
  return editForm;
}
function createTodoNode(index, content) {
  var todoDiv = document.createElement("div");
  todoDiv.className = "todo";
  todoDiv.id = `id${index}`;
  todoDiv.innerHTML = `
    <p>${content}</p>
    <div>
        <i class="edit fa-solid fa-pen-to-square"></i>
        <i class="del fa-solid fa-trash"></i>
    </div>
    `;
  // add event todo
  todoDiv.querySelector("p").addEventListener("click", complete);
  todoDiv.querySelector(".edit").addEventListener("click", function () {
    edit(index);
  });
  todoDiv.querySelector(".del").addEventListener("click", function () {
    del(index);
  });

  //end add event todo
  return todoDiv;
}

function addTask(...arg) {
  if (arg.length == 2) {
    var index = arg[0];
    var content = arg[1];
  } else {
    var index = Date.now();
    var content = todosForm.querySelector("input").value;
  }

  if (content) {
    var todoDiv = createTodoNode(index, content);
  }
  if (arg.length == 2) {
    document.querySelector(`#id${index}`).replaceWith(todoDiv);
  } else {
    main.appendChild(todoDiv);
    todosForm.querySelector("input").value = "";
  }
}

// feature of todo task

function complete() {
  this.classList.toggle("complete");
}

function edit(index) {
  var element = document.querySelector(`#id${index}`);
  var content = element.querySelector("p").innerText;
  element.replaceWith(createEditFormNode(index, content));

  //
  var newElement = document.querySelector(`#id${index}`);
  newElement.addEventListener("submit", function (event) {
    event.preventDefault();
    var newContent = newElement.querySelector("input").value;
    addTask(index, newContent);
  });
}

function del(index) {
  var element = document.querySelector(`#id${index}`);
  element.remove();
}
