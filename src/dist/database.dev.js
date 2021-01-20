"use strict";

var mongoose = require('mongoose');

mongoose.connect('mongodb://mongo/mongodatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function (db) {
  return console.log('Db is connected to', db.connection.host);
})["catch"](function (err) {
  return console.error(err);
});