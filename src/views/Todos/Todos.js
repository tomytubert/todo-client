import React from "react";
import { useTodo } from "../../context/todoContext";
import { Container, TodoCard } from "./styles";

function Todos() {
  const { todos, getTodos } = useTodo();

  React.useEffect(() => {
    getTodos();
  }, []);
  return (
    <Container>
      {todos.map((todo) => (
        <TodoCard key={todo._id}>
          <h3> {todo.title}</h3>
          <p>{todo.todo}</p>
        </TodoCard>
      ))}
    </Container>
  );
}

export default Todos;
