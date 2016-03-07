var mongoose = require('mongoose');



var userSchema = mongoose.Schema({
    userName: String,
    _id: String,
    profilePic: String,
    date: {type: Date, default: Date.now },
    commentBox: String
});




module.exports = mongoose.model('User', userSchema);

