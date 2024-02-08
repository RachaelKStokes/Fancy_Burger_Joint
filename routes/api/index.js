const router = require('express').Router();
const userRoutes = require('./userRoutes');
const eventRoutes = require('./eventRoutes');
const viewRoutes = require('../viewRoutes');
const menuRoutes = require('./menuRoutes');


router.use('/users', userRoutes);
router.use('/events', eventRoutes);
router.use('/', viewRoutes);
router.use('/menu', menuRoutes);

module.exports = router;
