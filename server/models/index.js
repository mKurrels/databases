var db = require('../db');

db.connect();

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function (messageData, cb) {
      var queryString = 'insert into messages (message, roomname, username) values ("'+ messageData.message +'", "'+ messageData.roomname +'", "'+ messageData.username +'")';
      var query = db.query(queryString, function(err, result) {
        if (err) {
          console.log(err);
        }
        cb(result);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},

    post: function (username, cb) {
      var queryString = 'insert into users (username) values ("'+ username +'")';
      var query = db.query(queryString, function(err, result) {
        if (err) {
          console.log(err);
        }
        cb(result);
      });
    }
  }
};

