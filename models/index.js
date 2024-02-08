const User = require('./User');
const Menu = require('./Menu');
const Event = require('./Event');

User.hasMany(Event, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Event.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Menu, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Menu.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Menu, Event };
