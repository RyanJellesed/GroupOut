require('dotenv').config();

module.exports = {

    'facebookAuth' : {
        'clientID'      : process.env.CLIENTID, // your App ID
        'clientSecret'  : process.env.CLIENTSECRET, // your App Secret
        'callbackURL'   : 'http://localhost:6060/auth/facebook/callback'
    },
  };