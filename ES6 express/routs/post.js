const express = require('express');
const post = require('../models/post');

const router = express.Router();

router.get("/",(req,res) =>{
    res.send('This is a the use of router aside');
    });

    //creating a post 


    router.post('/',(req,res) =>{
        console.log(req.body);
    })
    module.exports = router;