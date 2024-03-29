const router = require('express').Router();
const userRoutes = require('./userRoutes');
const eventRoutes = require('./eventRoutes');
const menuRoutes = require('./menuRoutes');

const reservation = require('./reservationRoutes');


router.use('/reservations', reservation);
router.use('/users', userRoutes);
router.use('/events', eventRoutes);
router.use('/menu', menuRoutes);
// router.use('/reservations', reservationRoutes);

module.exports = router;
