const express = require('express');
const app = express(); 
const mongoose= require("mongoose");

 mongoose.connect("mongodb+srv://sky123:sky123@cluster0.hjmsa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{console.log("mongo connected")}).catch((err)=>{
    "error while connecting database",err
  });

  app.use(express.json());
  app.use(express.urlencoded({extended:true}));
 
  app.post('/data',(req,res)=>{
 const data = req.body.data;
  console.log(data);
  });



  app.listen(3000,()=>{
    console.log('server is running on 3000');
  });
