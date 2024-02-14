const router = require('express').Router();
const userRoutes = require('./api/userRoutes');
const eventRoutes = require('./api/eventRoutes');
const viewRoutes = require('./viewRoutes');
// const reservationRoutes = require('./api/reservationRoutes');
// const menuRoutes = require('./api/menuRoutes');


const apiRoutes = require('./api');

router.use('/api', apiRoutes);
router.use('/', viewRoutes);
//router.use('/api/reservations', reservationRoutes);
// router.use('/users', userRoutes);
// router.use('/events', eventRoutes);
// router.use('/menu', menuRoutes);

module.exports = router;