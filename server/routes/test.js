const express=require('express')
const router = express.Router()
const app=express();

//import controllers

//const {getTest}=require('../controllers/test')



//import middlewares


//api routes

app.get('test',(req,res)=>{
   
    res.send('Birds home page')
})



module.exports=router