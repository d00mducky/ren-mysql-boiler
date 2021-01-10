// * SEE : https://expressjs.com/en/guide/database-integration.html#mysql

var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'my_db'
})

connection.connect()

console.log('Connected to mysql database!')

module.exports = connection;

// example query:
// connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
//   if (err) throw err

//   console.log('The solution is: ', rows[0].solution)
// })