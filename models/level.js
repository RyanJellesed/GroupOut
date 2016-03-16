var mongoose = require('mongoose');


var levelSchema = mongoose.Schema({
  name: String,
  icon: String,
});




module.exports = mongoose.model('Level', levelSchema);

  