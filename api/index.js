import express from 'express';
import cors from 'cors';
import router from './router/router.js';
import dbconnect from './config/db.js';
const app=express();
const PORT=9000;
app.use(cors())///frontend se baat krne k liye 
app.use(express.json());
dbconnect();
app.use(router);
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`); 
})