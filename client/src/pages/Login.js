import React, { useState } from 'react'
const Login = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const LoginUser=async()=>{
        // console.log(email,password)
        // const response= await axios.post(${url}, )
    }
  return (
    <>

    <div className="signup-container">
        <h2>Register</h2>
        <input type="email" className="inputBox" value={email} onChange={(e)=> setEmail(e.target.value)}  placeholder='Enter your email'/>
        <input type="password" className="inputBox" value={password}  onChange={(e)=> setPassword(e.target.value)} placeholder='Enter your password'/>
        <button className="appBtn" onClick={LoginUser}>Sign Up</button>
    </div>
    </>
  )
}

export default Login
