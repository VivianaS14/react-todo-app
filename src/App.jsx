import { useEffect, useState } from "react";
import Title from "./components/Title";
import TodoAdd from "./components/TodoAdd";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import TodoButtons from "./components/TodoButtons";

function App() {
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    setTheme(!theme);
  };

  const todos = [
    {
      content: "Hacer curso en platzi",
      completed: false,
    },
    {
      content: "Comer torta",
      completed: true,
    },
    {
      content: "Llorar con la llorona",
      completed: false,
    },
    {
      content: "LALALA",
      completed: true,
    },
  ];

  const leftsTodos = todos.filter((todo) => !todo.completed).length;

  return (
    <div className={`app ${theme ? "app-light" : "app-dark"}`}>
      <Title theme={theme} toggleTheme={toggleTheme} />
      <TodoAdd theme={theme} />
      <div>
        <TodoList theme={theme}>
          {todos.map((todo) => (
            <TodoItem
              key={todo.content}
              theme={theme}
              text={todo.content}
              completed={todo.completed}
            />
          ))}
        </TodoList>
        <TodoButtons theme={theme} uncompleted={leftsTodos} />
      </div>
    </div>
  );
}

export default App;
