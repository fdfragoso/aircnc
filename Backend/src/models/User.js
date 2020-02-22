const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    //name: String,
    email: String,
    //age: Number,
    //active: Boolean,
})

module.exports = mongoose.model('User', UserSchema);