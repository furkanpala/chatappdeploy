const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ConversationSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20,
        unique: true
    },
    description: {
        type: String,
        required: false,
        maxlength: 20,
    },
    members: [{
        type: Schema.Types.ObjectId,
        ref: "User",
    }],
    memberCandidates: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    notPermitted: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    messages: [{
        type: Schema.Types.ObjectId,
        ref: "Message"
    }],
    admin: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, {
    timestamps: true
});

const Conversation = mongoose.model("Conversation", ConversationSchema);

module.exports = Conversation;