const { Schema } = require("mongoose");

const userSchema = new Schema(
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
    }], 
    friends:[{
        type: Schema.Types.ObjectId,
        ref : 'user'

    }]
    },
    {
        toJSON: {
          getters: true,
          virtual: true
        },
        id:false,

})
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
  });

const User = model('user', userSchema);

module.exports = User;