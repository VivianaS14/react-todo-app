import { useEffect, useState } from "react";
import Title from "./layouts/Title";
import TodoSearch from "./components/TodoSearch";

function App() {
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    setTheme(!theme);
  };

  return (
    <div className={`app ${theme ? "app-light" : "app-dark"}`}>
      <Title theme={theme} toggleTheme={toggleTheme} />
      <TodoSearch />
    </div>
  );
}

export default App;
