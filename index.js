const express = require("express");

const app= express();

app.get("/",(req,res)=>{
    res.send("Welcome to aws server 1")
})

app.listen(4400,()=>console.log("server running on 4400"))