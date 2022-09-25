import mysql from 'mysql2';
import fs from "fs";
import path from "path";


let conf  = JSON.parse(fs.readFileSync(path.resolve('./config\/config.json'),"utf-8"));

  function createDB() {
  // Open the connection to MySQL server
  const connection = mysql.createConnection({
    host: conf.development.host ||"localhost",
    user: conf.development.username ||'root',
    password:conf.development.password || ''
  });

  // Run create database statement
   connection.query(
    'CREATE DATABASE IF NOT EXISTS `crud`',
    function (err, results) {
      console.log(results);
      console.log(err);
    }
  );

}
export default createDB();