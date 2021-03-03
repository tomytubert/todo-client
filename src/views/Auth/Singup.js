import React from "react";
import { useAuth } from "../../context/AuthContext"
import {signup} from "../../services/auth.service"
import AuthForm from "../../components/Auth/AuthForm"

const Singup = () => {
    //const {setUser} = useAuth();

    const handleSignup = async (user) => {
        try{
            const newUser = await signup(user)
        } catch(e){
            console.error(e);
        }
    }

    return ( 
        <div>
            <h1>Sing up</h1>
            <AuthForm btnText="Sing up" onSubmit={handleSignup} />
        </div>
        
    );
}

export default Singup;