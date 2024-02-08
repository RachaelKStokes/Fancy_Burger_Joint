const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Reservation extends Model {}

Reservation.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    reservation_date: {
      type: DataTypes.DATE,
      allowNull: false
    },

    reservation_time: {
      type: DataTypes.TIME,
      allowNull: false
    },

    reservation_guests: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'reservation',
  }
);

module.exports = Reservation;