//Donné de connexion à la base de donnée
var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  database : 'couture',
  user     : 'root',
  password : 'root',
});

module.exports = connection;