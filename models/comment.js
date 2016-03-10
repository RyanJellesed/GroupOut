var mongoose = require('mongoose');



var commentSchema = mongoose.Schema({
    

    commentor : { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    event: {type: mongoose.Schema.Types.ObjectId, ref: 'GroupOut'},
    date: {type: Date, default: Date.now },
    commentBody: String,
});




module.exports = mongoose.model('Comment', commentSchema);

