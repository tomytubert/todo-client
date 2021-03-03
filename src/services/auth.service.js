import axios from "axios";

const authApi = axios.create({
    withCredentials: true,
    baseURL: "http://localhost:4000",
  });

  export const login = (user) => authApi.post("/login",user);

  export const signup = (user) => authApi.post("/signup",user)