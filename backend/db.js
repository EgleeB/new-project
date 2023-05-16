const mysql = require("mysql2");

const databaseConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  port: process.env.DB_PORT,
};

const dbConnection = mysql.createConnection({
  ...databaseConfig,
  database: "",
});
dbConnection.query("CREATE DATABASE IF NOT EXISTS blog_posts", function (err) {
  if (err) throw err;
  console.log("Database blog_posts created");

  dbConnection.query("USE blog_posts", function (err) {
    if (err) throw err;
    console.log("Using database blog_posts");

    const blogTableQuery = `CREATE TABLE IF NOT EXISTS posts (
            id INT NOT NULL AUTO_INCREMENT,
            title VARCHAR(255) NOT NULL,
            text  VARCHAR(255) NOT NULL,
            image VARCHAR(255) NOT NULL,
            primary key (id)

        )`;
    dbConnection.query(blogTableQuery, (err) => {
      if (err) throw err;
      console.log("Table posts created");
    });
  });
});

module.exports = { dbConnection };
