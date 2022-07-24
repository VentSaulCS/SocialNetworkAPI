const { Schema } = require("mongoose");

const thought = new Schema(
    { thoughtText: {
        type: string,
        required: true,
        min_length:1,
        max_length:280,
        }, 
        createdAt: {
            type: Date,
            default: Date.now,


    }, username: {
        type: string,
        required: true,

    }, reactions: {
        

    }



})