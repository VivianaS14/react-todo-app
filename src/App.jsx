import { useEffect, useState } from "react";
import Title from "./components/Title";
import TodoAdd from "./components/TodoAdd";
import TodoList from "./components/TodoList";
import TodoButtons from "./components/TodoButtons";

function App() {
  /* Theme */
  const [theme, setTheme] = useState(true);
  const toggleTheme = () => {
    setTheme(!theme);
  };

  const leftsTodos = 2;
  /* todos.filter((todo) => !todo.completed).length; */

  return (
    <div className={`app ${theme ? "app-light" : "app-dark"}`}>
      <Title theme={theme} toggleTheme={toggleTheme} />
      <TodoAdd theme={theme} />
      <div className="main-container">
        <TodoList theme={theme} />
        <TodoButtons theme={theme} uncompleted={leftsTodos} />
      </div>
    </div>
  );
}

export default App;
