var models = require('../models');
var bluebird = require('bluebird');


module.exports = {
  messages: {
    get: function (req, res) {

      models.messages.get(function (result) {
        res.end(JSON.stringify(result));
      })
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.body, function (result) {
        //console.log('req.body', req.body, 'result', result);
      })
      res.end();
    } // a function which handles posting a message to the database

  },

  users: {
    // Ditto as above
    get: function (req, res) {

    },
    post: function (req, res) {
      console.log('req', req.body.username)
      models.users.post(req.body.username, function (result) {
        //console.log('users post');
      })
      res.end();
    }
  }
};

