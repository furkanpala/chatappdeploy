const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// TODO: Add isAdmin boolean
// TODO: Üye olduğu grupları ekle
const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 10,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 3
    }
}, {
    timestamps: true
});

const User = mongoose.model("User", UserSchema);

module.exports = User;