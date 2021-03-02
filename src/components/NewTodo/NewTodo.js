import React from "react";
import { Form, Input, Button, Label } from "./styles";
import { useTodo } from "../../context/todoContext";

function NewTodo() {
  const initialState = { title: "", todo: "" };
  const [state, setState] = React.useState(initialState);
  const { createTodo } = useTodo();
  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();
        await createTodo(state);
        setState(initialState);
      }}
    >
      <Label>title</Label>
      <Input
        type="text"
        name="title"
        value={state.title}
        onChange={({ target }) =>
          setState({ ...state, [target.name]: target.value })
        }
      />
      <Label>todo</Label>
      <Input
        type="text"
        name="todo"
        value={state.todo}
        onChange={({ target }) =>
          setState({ ...state, [target.name]: target.value })
        }
      />
      <Button type="submit">create</Button>
    </Form>
  );
}

export default NewTodo;
