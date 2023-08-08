import express from 'express'
const app = express(),
port = 3004,
server = app.listen(port,()=>console.log("yay our server is runnig at 127.0.0.1:", port))
app.use(express.static('public'))
