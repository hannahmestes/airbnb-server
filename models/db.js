var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'remotemysql.com',
    user     : 'Joqkfe9mzS',
    password : 'C1ypTuit9J',
    database : 'Joqkfe9mzS'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;