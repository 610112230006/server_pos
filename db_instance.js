// sql-------
// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "pos"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

// module.exports = con;

const Sequelize = require("sequelize");
const sequelize = new Sequelize('pos', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

(async () => {
    await sequelize.authenticate();
})();

module.exports = sequelize;