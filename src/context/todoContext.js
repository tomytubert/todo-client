import React from "react";
import {
  getTodos as getTodosService,
  createTodo as createTodoService,
} from "../services/todo.service";

export const TodoContext = React.createContext({});

function TodoProvider({ children }) {
  const [todos, setTodos] = React.useState([]);
  const getTodos = async () => {
    const { data } = await getTodosService();
    setTodos(data);
  };
  const createTodo = async (todo) => {
    const { data: newTodo } = await createTodoService(todo);
    setTodos((state) => state.concat(newTodo));
  };
  return (
    <TodoContext.Provider value={{ getTodos, todos, createTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

// useTodo devuelve la prop value de TodoContext.Provider
export function useTodo() {
  return React.useContext(TodoContext);
}

export default TodoProvider;
