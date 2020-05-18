require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');

const mongoose = require('mongoose');

app.use(cors());

mongoose.connect(
    process.env.ATLAS_URI,{
        useNewUrlParser:true,
        useCreateIndex:true,
        useUnifiedTopology: true

});

const db = mongoose.connection;

db.on('error', (error) =>{
    console.log(error)
})

db.once ('open', () =>{
console.log("  connected to Database - Mongoose - connection ") 
})


const PORT = process.env.PORT || 3000;

app.use(express.json())

const userRouter = require('./Routes/users');
app.use('/users', userRouter)

app.listen( PORT , () => console.log("  server is listening at http://localhost => at PORT ",PORT));

