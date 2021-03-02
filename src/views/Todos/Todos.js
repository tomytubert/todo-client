import React from "react";
import { useTodo } from "../../context/todoContext";
import { Container, TodoCard } from "./styles";
import { NewTodo } from "../../components/NewTodo";

function Todos() {
  const { todos, getTodos } = useTodo();

  React.useEffect(() => {
    getTodos();
  }, []);
  return (
    <Container>
      <div>
        {todos.map((todo) => (
          <TodoCard key={todo._id}>
            <h3> {todo.title}</h3>
            <p>{todo.todo}</p>
          </TodoCard>
        ))}
      </div>
      <div>
        <NewTodo />
      </div>
    </Container>
  );
}

export default Todos;
