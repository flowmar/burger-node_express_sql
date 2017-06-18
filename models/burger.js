// Model for burgers application
// Import orm
var orm = require('../config/orm.js')

// Will call the orm functions using the user input for burgerName
var burger = {
    // Lists all burgers in the database
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    // Inserts a new row into the burgers database
    insert: function(burger_name, cb) {
        orm.insert(burger_name, function(res) {
            cb(res);
        });
    },
    // Updates a burger's 'devoured' status from false to true
    update: function(burger_name, cb) {
        orm.update(burger_name, function(res) {
            cb(res);
        });
    }
}

// Exports the file as a module
module.exports = burger;