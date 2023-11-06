import React, { useEffect, useState } from "react";

export default function form() {
  const [todo, setTodo] = useState([]);
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.querySelector("input").value = "";
    setTodo([...todo, name]);
  };
  const handleChange = (e) => {
    setName(e.target.value);
  };
  useEffect(() => {
    setCount(todo.length);
  }, [todo]);
  return (
    <div>
      <ul>
        {todo.map((name, id) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
      <hr />
      <form action="" onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} placeholder="Name..." />
      </form>
      <h3>Số công việc: {count}</h3>
    </div>
  );
}
