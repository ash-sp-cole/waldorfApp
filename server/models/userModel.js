const mongoose = require ('mongoose');


const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
        
    },

    age:{
        type: String,
        required: true
    
    },

    gender: {
        type: String,
        required: true

    },

    email: {
        type: String,
        required: true


    },

    joinDate:{
        type:Date,
        required: true,
        default: Date.now
    }


})

module.exports = mongoose.model('users', userSchema);