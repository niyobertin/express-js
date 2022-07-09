const mongoose = require('mongoose');

//crating a schema of data we may have to post to our db

const schemaPost = mongoose.Schema({
    title:{
        type:String,
        required:true

    },
    description:{
        type:String,
        required:true
        
    },
    date:{
        type:Date,
        default:Date.now
    },
});


module.exports = mongoose.model ('Post',schemaPost);