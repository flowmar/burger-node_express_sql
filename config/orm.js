// Require the information from the 'connection.js' file
var connection = require('./connection.js');

// Create SQL query functions in Object Relational Mapping format
var orm = {
    // Function to show all
    all: function(cb) {
        var q = "SELECT * FROM burgers;";
        connection.query(q, function(err, result) {
            cb(result);
        });
    },
    // Function to insert a new burger into the app
    insert: function(burgerName, cb) {
        var q = "INSERT INTO burgers (burger_name) VALUES (?);";
        connection.query(q, [burgerName], function(err, result) {
            cb(result);
        });
    },
    update: function(burgerName) {
        var q = "UPDATE burgers SET devoured = true WHERE burger_name = ?;";
        connection.query(q, [burgerName], function(err, result) {
            cb(result);
        });
    }
}

// Export the orm as a module
module.exports = orm;