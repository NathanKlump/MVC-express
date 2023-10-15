const mysql = require('mysql2');

let dbConnection = null;

function connect() {
  dbConnection = mysql.createConnection({
    //vars will be in .env
    host: '127.0.0.1',
    user: 'root',
    password: 'Nakl_3349',
    database: 'sql_workbench'
  });

  dbConnection.connect((err) => {
    if (err) {
      console.error('Error connecting to the database: ' + err.stack);
      return;
    }
    console.log('Connected to the database');
  });
}

function disconnect() {
  if (dbConnection) {
    dbConnection.end((err) => {
      if (err) {
        console.error('Error disconnecting from the database: ' + err.stack);
        return;
      }
      console.log('Disconnected from the database');
    });
  }
}

module.exports = {
  connect,
  disconnect
};
