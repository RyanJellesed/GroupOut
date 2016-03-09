var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
// this is known as an authentication strategy
// local is allowing someong to sign up with just a username and password
var userSchema = mongoose.Schema({
    facebook            : {
        id         : String,
        token      : String,
        emails     : String,
        name       : String,
        birthday   : String,
        picture    : String,
        gender     : String,
        
    }
});

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);