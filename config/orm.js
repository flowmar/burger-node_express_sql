// Require the information from the 'connection.js' file
var connection = require('./connection.js');

// Create SQL query functions in Object Relational Mapping format
var orm = {
    // Function to show all
    all: function(tableInput, cb) {
        var q = "SELECT * FROM " + tableInput + ";";
        connection.query(q, function(err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    // Function to insert a new burger into the app
    insert: function(burger_name, cb) {
        var q = "INSERT INTO burgers (burger_name) VALUES (?);";
        connection.query(q, [burger_name], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    update: function(burger_name, cb) {
        var q = "UPDATE burgers SET devoured = true WHERE burger_name = ?;";
        connection.query(q, [burger_name], function(err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    }
}

// Export the orm as a module
module.exports = orm;