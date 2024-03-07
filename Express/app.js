const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.sendFile(__dirname+('/public/home.html'));
})

app.get('/contact',(req,res)=>{
    res.sendFile(__dirname+('/public/contact.html'));
})

app.get('/about',(req,res)=>{
    res.sendFile(__dirname+('/public/about.html'));
})

app.listen(4000);