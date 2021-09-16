const Sequelize = require("sequelize");
const sequelize = require("../db_instance");

const orders = sequelize.define(
  "orders",
  {
    id_product: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    comment: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.BOOLEAN,
    },
    coute: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    // options
  }
);

(async () => {
  await orders.sync({ force: false });
})();

module.exports = orders;
