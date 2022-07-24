const { Schema } = require("mongoose");

const user = new Schema(
    {
        username: {
            type: String,
            unique: true,
            reqiuired: true,
            trimmed: true,
    }, email: {
        type: String,
        reqiuired: true,
        unique: true,
    }, thoughts:{

    },friends:{
        
    }



})