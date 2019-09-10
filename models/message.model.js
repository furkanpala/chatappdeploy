const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    sentBy: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    content: {
        type: String,
        required: true,
        maxlength: 200
    }
}, {
    timestamps: true
});

const Message = mongoose.model("Message", MessageSchema);

module.exports = Message;