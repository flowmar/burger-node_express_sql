// Require the information from the 'connection.js' file
var connection = require('./connection.js');

var orm = {
    selectAll: function(table) {
        var q = "SELECT * FROM ??";
        connection.query(q, [table], function(err, result) {
            console.log(result);
        });
    },
    insertOne: function(burgerName, eaten) {
        var q = "INSERT INTO burgers (burger_name, devoured) VALUES (?,?)";
        connection.query(q, [burgerName, eaten], function(err, result) {
            console.log(result);
        });
    },
    updateOne: function(burgerName, eaten) {
        var q = "UPDATE burgers SET devoured = true WHERE burger_name = ?";
        connection.query(q, [burgerName], function(err, result) {
            console.log(result);
        });
    }
}