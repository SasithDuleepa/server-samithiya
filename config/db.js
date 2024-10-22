require('dotenv').config();
const mysql = require('mysql2');



  const connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    database: 'samithiya',
    // port: 3306,
    password: process.env.DB_PWD,
  });

  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL database:', err);
      return;
    }
    console.log('Connected to MySQL database!');
  });
  
  connection.addListener('error', (err) => {
    console.log(err);
  });
  

    module.exports = connection;