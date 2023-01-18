import { useEffect, useState } from "react";
/* Components */
import Title from "./components/Title";
import TodoAdd from "./components/TodoAdd";
import TodoList from "./components/TodoList";
import TodoButtons from "./components/TodoButtons";
/* Api */
import { addTodos, getTodos, putTodos, deleteTodos } from "./api";

function App() {
  /* Estados */
  const [theme, setTheme] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  /* Theme */
  const toggleTheme = () => {
    setTheme(!theme);
  };

  /* Add */
  const addTodo = async (_newTodo) => {
    try {
      await addTodos(_newTodo);
      getAllTodos();
    } catch (error) {
      console.log("Error", error);
    }
  };
  const handleAddTodo = (e) => {
    if (e.key === "Enter") {
      addTodo(newTodo);
      setNewTodo("");
    }
  };
  const handleChange = (e) => {
    setNewTodo(e);
  };

  /* Get */
  const getAllTodos = async () => {
    try {
      const res = await getTodos();
      console.log(res.data);
      setTodos(res.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(true);
    }
  };

  /* Put */
  const putToDos = async (_completeTodo, _id) => {
    try {
      await putTodos(_completeTodo, _id);
      getAllTodos();
    } catch (error) {
      setIsLoading(false);
      setError(true);
    }
  };
  const handleCompleteTodo = (_id) => {
    let newTodo = [...todos];
    let todoIndex = todos.findIndex((todo) => todo.id === _id);
    newTodo[todoIndex].completed = !newTodo[todoIndex].completed;
    putToDos(newTodo[todoIndex], newTodo[todoIndex].id);
  };

  /* Delete */
  const deleteTodo = async (_id) => {
    try {
      await deleteTodos(_id);
      getAllTodos();
    } catch (error) {
      setIsLoading(false);
      setError(true);
    }
  };
  const handelDeleteTodo = (_id) => {
    let newTodo = [...todos];
    let todoIndex = todos.findIndex((todo) => todo.id === _id);
    deleteTodo(newTodo[todoIndex].id);
  };

  /* Count completed */
  const leftsTodos = todos.filter((todo) => !todo.completed).length;

  /* Effect */
  useEffect(() => {
    getAllTodos();
  }, []);

  return (
    <div className={`app ${theme ? "app-light" : "app-dark"}`}>
      <Title theme={theme} toggleTheme={toggleTheme} />
      <TodoAdd
        theme={theme}
        value={newTodo}
        handleChange={handleChange}
        handleAddTodo={handleAddTodo}
      />
      <div className="main-container">
        <TodoList
          theme={theme}
          todos={todos}
          isLoading={isLoading}
          error={error}
          handleCompleteTodo={handleCompleteTodo}
          handelDeleteTodo={handelDeleteTodo}
        />
        <TodoButtons theme={theme} uncompleted={leftsTodos} />
      </div>
    </div>
  );
}

export default App;
