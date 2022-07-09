const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

require('dotenv/config');//helps to hide user name and password of created database;
//Importing post  root.
const postRoote = require('./routs/post');


//using midleware
app.use(bodyParser.json());
app.use('/posts',postRoote)

app.get("/",(req,res) =>{
res.send('This is the new time and new day to come back into programing')
});



//connecting to a database;
//using process.env.valiable name to give access to a connection.
mongoose.connect(process.env.DB_CONNECTION,()=>{
    console.log('connected to a DB')
})
app.listen(2000,()=>{
    console.log("server is listening to 2000");
});