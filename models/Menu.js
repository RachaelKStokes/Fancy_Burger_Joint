const { model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Menu extends model {}

Menu.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    item_name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    item_price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },

    item_description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'menu',
  }
);

module.exports = Menu;