// Require the information from the 'connection.js' file
var connection = require('./connection.js');

// Create SQL query functions in Object Relational Mapping format
var orm = {
    // Function to show all 
    selectAll: function() {
        var q = "SELECT * FROM burgers";
        connection.query(q, function(err, result) {
            console.log(result);
        });
    },
    insertOne: function(burgerName, eaten) {
        var q = "INSERT INTO burgers (burger_name, devoured) VALUES (?,?)";
        connection.query(q, [burgerName, eaten], function(err, result) {
            console.log(result);
        });
    },
    updateOne: function(burgerName) {
        var q = "UPDATE burgers SET devoured = true WHERE burger_name = ?";
        connection.query(q, [burgerName], function(err, result) {
            console.log(result);
        });
    }
}

// Export the orm as a module
module.exports = orm;