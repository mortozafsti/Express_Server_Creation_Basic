const express = require('express');
const app = express();

// * means any method get, put, patch delete, post etc & any route

// app.all("*",(req,res)=>{
//     console.log(req.method)
//     res.send(`<h1>Hello mr Mortoza</h1>`)
// })

// handle route individually one by one
app.get("/",(req,res)=>{
    console.log(req.method)
    res.send(`<h1>Hello From get Method</h1>`)
})
app.post("/",(req,res)=>{
    console.log(req.method)
    res.send(`<h1>Hello From post Method</h1>`)
})
app.put("/",(req,res)=>{
    console.log(req.method)
    res.send(`<h1>Hello From put Method</h1>`)
})
app.patch("/",(req,res)=>{
    console.log(req.method)
    res.send(`<h1>Hello From patch Method</h1>`)
})
app.delete("/",(req,res)=>{
    console.log(req.method)
    res.send(`<h1>Hello From delete Method</h1>`)
})

// listen port
app.listen(8000,()=>{
    console.log('Server is running from 8000 Port')
})
