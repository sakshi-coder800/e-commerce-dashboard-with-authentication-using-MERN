import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';


const app= express();

dotenv.config()


// create routes 
app.get("/",(req,res)=>{
    res.send("<h1>  App is Working</h1>")
})


const port= process.env.PORT
app.listen(port ,()=>{
    console.log(`connected on port ${port}` )
})