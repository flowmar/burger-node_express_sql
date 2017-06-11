// Model for burgers application
// Import orm
var orm = require('../config/orm.js')

// Will call the orm functions using the user input for burgerName
var burger = {
    // Lists all burgers in the database
    all: function(cb) {
        orm.all(function(res) {
            cb(res);
        });
    },
    // Inserts a new row into the burgers database
    insert: function(burgerName, cb) {
        orm.insert(burgerName, function(res) {
            cb(res);
        });
    },
    // Updates a burger's 'devoured' status from false to true
    update: function(burgerName, cb) {
        orm.update(burgerName, function(res) {
            cb(res);
        });
    }
}

// Exports the file as a module
module.exports = burger;