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
    }, thoughts:[{
            type : Schema.Types.ObjectId,
            ref : 'thought'
    }], friends:{
        type: Schema.Types.ObjectId,
        ref : 'user'

    }



})