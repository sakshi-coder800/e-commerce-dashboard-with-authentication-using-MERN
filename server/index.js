import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';


const app= express();

dotenv.config()

const port= process.env.PORT
app.listen(port ,()=>{
    console.log(`connected on port ${port}` )
})