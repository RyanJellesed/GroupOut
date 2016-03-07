var mongoose = require('mongoose');


// define the schema for our user model
// this is known as an authentication strategy
// local is allowing someong to sign up with just a username and password
var userSchema = mongoose.Schema({
    roadBiking: Boolean,
    mountainBiking: Boolean,
    hiking: Boolean,
    skiing_snowboarding: Boolean,
    dogWalking: Boolean,
    tennis: Boolean,
    folf: Boolean,
    crossCountrySkiing: Boolean,
    fishing: Boolean,
    running: Boolean
});



// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);