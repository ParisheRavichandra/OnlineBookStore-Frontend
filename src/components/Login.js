import { useState } from "react";
import './Login.css'
import { useNavigate } from 'react-router-dom';
const Login = props => {
    const [credentials, setCredentials] = useState({ userName: '', password: '' })
    const handleChange = e => {
        let { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    }
   
    const handleSubmit = e => {
        e.preventDefault();
        props.handleLogin({ ...credentials });
        
    }
    return(
    <div className="login-form">
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit} >
        <label htmlFor="inputEmail">UserName</label>
        <input type="text" name="userName" value={credentials.userName} onChange={handleChange} required placeholder="Enter UserName"></input>
        <label htmlFor="inputPassword">Password</label>
        <input type="password" name="password" value={credentials.password} onChange={handleChange} required placeholder="Enter Password"></input>
        <button type="submit">Login</button>
        
   
      </form>
    </div>
    );
}
export default Login;