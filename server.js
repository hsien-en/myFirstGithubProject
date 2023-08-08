import express from 'express'

const PORT = process.env.port || 3009;
const app = express();
const server = app.listen(PORT,() => console.log(`Yay and t=stuuf jk dotn talk to me`,PORT));
app.use(express.static('public'));
