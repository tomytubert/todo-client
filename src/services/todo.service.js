import axios from "axios";

const todoApi = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:4000",
});

export const getTodos = () => todoApi.get("/todo");

export const getTodo = (todoId) => todoApi.get(`/todo/${todoId}`);

export const updateTodo = (todoId, body) =>
  todoApi.patch(`/todo/${todoId}`, body);

export const createTodo = (body) => todoApi.post("/todo", body);

export const deleteTodo = (todoId) => todoApi.delete(`/todo/${todoId}`);
