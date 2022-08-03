import React ,{useState} from 'react'
import axios from 'axios'
import './Register.css'
import { Link  } from 'react-router-dom'

function RegisterForm(){
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [userName, setUserName]=useState('')
    const [phoneNumber, setPhoneNUmber]=useState('')
    const [confirmPassword, setconfirmPassword]=useState('')
 

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Successfully Registered")
        axios.post('http://localhost:18236/api/Users/Register', {
            userName:userName,
            phoneNumber:phoneNumber,
            email:email,
            password: password,
            confirmPassword:confirmPassword,
            
            
                                
        })
        .then((Response) => {
            console.log(Response.data)
            alert("User Registered Successfully ")
        })

        .catch((err) => {
            console.log(err)
            console.log(err.Response)
            alert(err.Response.data.error.message)
        })
    } 
    

   


 

  return (
    <div className="login-form">
      <h1>Registration Page</h1>
      <form onSubmit={handleSubmit} >
      <label htmlFor="inputEmail">UserName</label>
        <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} required placeholder="Enter UserName"></input> 
        <label htmlFor="inputEmail">E-mail</label>
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} required placeholder="Enter Email"></input>
        <label htmlFor="inputEmail">PhoneNumber</label>
        <input type="text" value={phoneNumber} onChange={(e)=>setPhoneNUmber(e.target.value)} required placeholder="Enter PhoneNumber"></input>
        <label htmlFor="inputPassword">Password</label>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required name="password" placeholder="Enter Password"></input>
        <label htmlFor="inputPassword">Confirm-Password</label>
        <input type="password" value={confirmPassword} onChange={(e)=>setconfirmPassword(e.target.value)} required name="confirmpassword" placeholder="Re Enter Password"></input>
        <button type="submit">Register</button>

       

   
      </form>
    </div>
    

  
  );
};


export default RegisterForm;
