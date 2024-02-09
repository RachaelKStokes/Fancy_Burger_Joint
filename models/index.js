const User = require('./User');
// const Menu = require('./Menu');
const Event = require('./Event');
const Reservation = require('./Reservation');

User.hasMany(Reservation, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Reservation.belongsTo(User, {
  foreignKey: 'user_id'
});

// Menu.hasMany(Reservation, {
//   foreignKey: 'menu_id',
//   onDelete: 'CASCADE'
// });

// Reservation.belongsTo(Menu, {
//   foreignKey: 'menu_id'
// });

Event.hasMany(Reservation, {
  foreignKey: 'event_id',
  onDelete: 'CASCADE'
});

Reservation.belongsTo(Event, {
  foreignKey: 'event_id'
});

User.hasMany(Event, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Event.belongsTo(User, {
  foreignKey: 'user_id'
});

// User.hasMany(Menu, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });

// Menu.belongsTo(User, {
//   foreignKey: 'user_id'
// });



module.exports = { 
  User,
  Event,
  Reservation,
};
