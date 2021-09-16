const Sequelize = require("sequelize");
const sequelize = require("../db_instance");

const products = sequelize.define(
    "products",
    {      
      name: {
        type: Sequelize.STRING,
        allowNull : false
      },
      detail:{
        type: Sequelize.STRING,
        allowNull : false
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull : false
      },
     
    },
    {
      // options
    }
  );


(async () => {
  await products.sync({ force: false });    
})();

  
module.exports = products;
