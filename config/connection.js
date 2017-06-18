// Require mysql
var mysql = require('mysql');
var connection;

// Create connection between node.js and mysql
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'burgersdb'
    });
}

// If there is an error, pull the human readable part from the response stack
connection.connect(function(err) {
    if (err) {
        console.error("Error connecting: " + err.stack);
        return;
    }
    // Log the connection thread ID to the console
    console.log("Connected as id: " + connection.threadId);
});

// Export this file as a module called 'connection'
module.exports = connection;