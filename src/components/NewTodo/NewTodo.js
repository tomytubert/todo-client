import React from "react";
import { Form, Input, Button, Label } from "./styles";

function NewTodo() {
  return (
    <Form>
      <Label>title</Label>
      <Input type="text" name="title" />
      <Label>todo</Label>
      <Input type="text" name="todo" />
      <Button type="submit">create</Button>
    </Form>
  );
}

export default NewTodo;
