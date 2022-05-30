const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    Email: {
        type: String,
        required: true
    },
    Lastname: {
        type: String,
        required: true
    },
    Firstname: {
        type: String,
        required: true
    },
    Age: {
        type: String,
        required: true
    }
}, {timestamps: true});


module.exports = mongoose.model('users', UserSchema);
