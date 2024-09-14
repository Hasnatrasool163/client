const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'testuser', 
  password: 'password', 
  database: 'assignments_db', 
  connectionLimit: 20,
});

module.exports = pool.promise();
