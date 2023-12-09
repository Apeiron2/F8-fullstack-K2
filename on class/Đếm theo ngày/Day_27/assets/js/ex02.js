// var count = document.createElement("span");
// count.innerText = 0;

// var h1 = document.createElement("h1");
// h1.innerText = `Count: `;
// document.body.append(h1);
// h1.append(count);

// var btn = document.createElement("button");
// btn.innerText = "+";
// document.body.append(btn);

// btn.addEventListener("click", function () {
//   count.innerText++;
// });

// var text = document.createTextNode("hello");
// document.body.append(text);

var todo = document.querySelector(".todo");
var todoList = todo.querySelector(".todo-list");
var todoForm = todo.querySelector("form");

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  var input = this.children[0];
  var name = input.value;
  if (name) {
    var todo = document.createElement("p");
    todo.innerText = name;
    todoList.append(todo);
  }
});
