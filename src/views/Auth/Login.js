import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext"
import {login} from "../../services/auth.service"
import AuthForm from "../../components/Auth/AuthForm"

function Login(){
    const {user,setUser} = useAuth();
    const [logged,setLogged] = useState(false)

    const handleLogin = async (user) => {
        try{
            const {config,data} = await login(user);
            localStorage.setItem("user",JSON.stringify(config.data));
            setUser({user: config.data});
            const logged = data === "OK" ? true : false
            console.log(data);
            setLogged(logged)
        } catch(e) {
            console.error(e);
        }
    }
    
    return(
        <div>
            <h1>Login</h1>
            <AuthForm btnText="login" onSubmit={handleLogin} />
            
        </div>
        
    );
}

export default Login;