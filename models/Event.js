const { model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Event extends model {}

Event.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    event_name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    event_date: {
      type: DataTypes.DATE,
      allowNull: false
    },

    event_location: {
      type: DataTypes.STRING,
      allowNull: false
    },

    event_description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'event',
  }
);

module.exports = Event;