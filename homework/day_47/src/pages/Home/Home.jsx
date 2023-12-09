import React from "react";
import TodoTable from "../../components/TodoTable/TodoTable";
import "./Home.scss";
const Home = () => {
  return (
    <div className="Home">
      <header>Header</header>
      <main>
        <TodoTable />
      </main>
      <footer>Footer</footer>
    </div>
  );
};

export default Home;
