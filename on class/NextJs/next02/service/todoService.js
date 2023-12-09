const todoApi = "https://jsonplaceholder.typicode.com/posts";
export const getTodos = async () => {
  const response = await fetch(todoApi, {
    cache: "force-cache",
    // next: {
    //   revalidate: 5, // Sau 5s thì xóa cache
    // },
  });
  const data = await response.json();
  return { response, data };
};

export const addTodos = async (todo) => {
  const response = await fetch(todoApi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
    next: {
      tags: ["todo_list"],
    },
  });
  const data = await response.json();
  return { response, data };
};

export const deleteTodo = async (id) => {
  const response = await fetch(`http://localhost:5000/todos/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });
  const data = await response.json();
  return { response, data };
};
