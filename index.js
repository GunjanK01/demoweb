require('dotenv').config()
const express = require('express') //import express from "express" this is common js style and other is module js style
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req, res) => {
    res.send('DISCIPLINE')
})

app.get('/login', (req, res)=> {
    res.send('<h1>Please don\'t ignore yourself</h1>')
})

app.get('/you', (req,res)=> {
    res.send('<h2>CHai aur code</h2>')
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`Example app listening on port ${process.env.PORT || 3000}`);
  });