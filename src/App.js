import React from "react";
import {Switch,Route,Redirect} from "react-router-dom"
import { Todos } from "./views/Todos";

import "./App.css";
import { useAuth } from "./context/AuthContext";
import Login from "./views/Auth/Login";
import Singup from "./views/Auth/Singup";

function App() {
 const {user,setUser} = useAuth()

  return (
    <div className="App">
    <button onClick={()=> localStorage.removeItem("user")}>Logout</button>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/singup">
            <Singup />
          </Route>
          {user ? 
          <Route exact path="/todo">
            <Todos />
          </Route>
          : <Redirect to="/login" />
          } 
        </Switch>
    </div>
  );
}

export default App;
