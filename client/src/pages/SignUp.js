import React, { useState } from 'react'
const SignUp = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const SignUpUser=async()=>{
        // console.log(name,email,password)
        // const response= await axios.post(${url}, )
    }
  return (
    <>

    <div className="signup-container">
        <h2>Register</h2>
        <input type="text" className="inputBox" value={name} onChange={(e)=> setName(e.target.value)} placeholder='Enter your name'/>
        <input type="email" className="inputBox" value={email} onChange={(e)=> setEmail(e.target.value)}  placeholder='Enter your email'/>
        <input type="password" className="inputBox" value={password}  onChange={(e)=> setPassword(e.target.value)} placeholder='Enter your password'/>
        <button className="appBtn" onClick={SignUpUser}>Sign Up</button>
    </div>
    </>
  )
}

export default SignUp
