var mongoose = require('mongoose');



var groupOutSchema = mongoose.Schema({
        users        : [],
        category     : String,
        title        : String,
        description  : String,
        img          : String,
        location     : String,
        date         : Date,
        time         : Date,
        level        : String,
        petFriendly  : Boolean,
        familyFriendly : Boolean,
        comments       : String,

});


// create the model for users and expose it to our app
module.exports = mongoose.model('groupOut', groupOutSchema);