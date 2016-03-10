var mongoose = require('mongoose');


var categorySchema = mongoose.Schema({
  name: String
});



// create the model for users and expose it to our app
module.exports = mongoose.model('Category', categorySchema);

    // roadBiking: Boolean,
    // mountainBiking: Boolean,
    // hiking: Boolean,
    // skiing_snowboarding: Boolean,
    // dogWalking: Boolean,
    // tennis: Boolean,
    // folf: Boolean,
    // crossCountrySkiing: Boolean,
    // fishing: Boolean,
    // running: Boolean

  