import React,{useState} from "react";

const AuthForm = ({btnText, onSubmit}) => {
    const[state,setState] = useState({email:"",password:""})

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(state)
    }
    return ( 
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input type="email" name="email" value={state.email} onChange={ ({target}) => setState({...state,[target.name]:target.value})} />
          <label>Password</label>
          <input type="password" name="password" value={state.password} onChange={ ({target}) => setState({...state,[target.name]:target.value})} />
        <button type="submit">{btnText}</button>
        </form>
     );
}

export default AuthForm;