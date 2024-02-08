const router = require('express').Router();
const userRoutes = require('./api/userRoutes');
const eventRoutes = require('./api/eventRoutes');
const apiRoutes = require('./api');
const viewRoutes = require('./viewRoutes');
const menuRoutes = require('./api/menuRoutes');

router.use('/', viewRoutes);
router.use('/api', apiRoutes);
router.use('/users', userRoutes);
router.use('/events', eventRoutes);
router.use('/menu', menuRoutes);

module.exports = router;