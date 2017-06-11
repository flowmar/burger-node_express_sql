// Require mysql
var mysql = require('mysql');

// Create connection between node.js and mysql
var connection = mysql.connection({
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"
});

// If there is an error, pull the human readable part from the response stack
connection.connect(function(err) {
    if (err) {
        console.error("Error connecting: " + err.stack);
    }
    // Log the connection thread ID to the console
    console.log("Connected as id: " + connection.threadId);
});

// Export this file as a module called 'connection'
module.exports = connection;