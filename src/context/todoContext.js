import React from "react";
import { getTodos as getTodosService } from "../services/todo.service";

export const TodoContext = React.createContext({});

function TodoProvider({ children }) {
  const [todos, setTodos] = React.useState([]);
  const getTodos = async () => {
    const { data } = await getTodosService();
    setTodos(data);
  };
  return (
    <TodoContext.Provider value={{ getTodos, todos }}>
      {children}
    </TodoContext.Provider>
  );
}

// useTodo devuelve la prop value de TodoContext.Provider
export function useTodo() {
  return React.useContext(TodoContext);
}

export default TodoProvider;
