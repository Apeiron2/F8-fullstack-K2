import { useDispatch, useSelector } from "react-redux";
import Counter from "./components/Counter";
import { useEffect } from "react";
import { fetchTodo } from "./redux/middlewares/fetchTodo";

function App() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodo());
  }, []);
  return (
    <div>
      <h1>Xin chào</h1>
      <Counter />
      <h2 className="p-1">Công việc:</h2>
      <ol className=" list-disc">
        {todos.map(({ id, title }) => (
          <li key={id} className="my-3 p-3 rounded bg-cyan-400 w-fit">
            {title}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
