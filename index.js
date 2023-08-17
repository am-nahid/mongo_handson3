const express = require('express')
const mongoose = require('./config/configDb')
const route = require('./route/route')

const app = express()
app.use(express.json())

app.use('/api',route)

app.get('/',(req,res)=>{
    res.send("default route")
})

app.listen(6060,async ()=>{
    await mongoose()
    console.log("site running at port 6060");
})