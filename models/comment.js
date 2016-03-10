var mongoose = require('mongoose');



var commentSchema = mongoose.Schema({
    userName: String,
    _id: String,
    profilePic: String,
    date: {type: Date, default: Date.now },
    commentBox: String
});




module.exports = mongoose.model('Comment', commentSchema);

