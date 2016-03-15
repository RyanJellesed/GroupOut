var mongoose = require('mongoose');



var groupOutSchema = mongoose.Schema({
        creator      : { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        joiners      : [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
        category     : { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
        level        : { type: mongoose.Schema.Types.ObjectId, ref: 'Level' },
        title        : String,
        description  : String, 
        location     : String,
        date         : String,
        time         : String,
        petFriendly  : Boolean,
        familyFriendly : Boolean,
        comments       :[{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]

});


// create the model for users and expose it to our app
module.exports = mongoose.model('GroupOut', groupOutSchema);