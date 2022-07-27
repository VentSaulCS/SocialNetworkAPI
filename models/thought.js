const { Schema } = require("mongoose");

const reactionSchema = require("./reaction")

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: string,
            required: true,
            min_length: 1,
            max_length: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,


        }, username: {
            type: string,
            required: true,

        }, reactions: [reactionSchema]
    }, {
    toJSON: {
        getters: true
    }



})

thoughtSchema.virtual('reactioncount').get(function () {
    return this.reactions.length;
  });

const Thought = model('thought', thoughtschema);

module.exports = Thought;