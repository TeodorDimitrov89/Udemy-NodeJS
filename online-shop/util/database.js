const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', '1234567', {
  dialect: 'mysql',
  host: 'localhost'
})

// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   database: 'node-complete',
//   password: '1234567'
// });


//mysqld --defaults-file="C:\ProgramData\MySQL\MySQL Server 8.0\my.ini" --standalone --console





module.exports = sequelize;