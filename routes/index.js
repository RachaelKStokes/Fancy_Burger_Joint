const router = require('express').Router();
const userRoutes = require('./userRoutes');
const eventRoutes = require('./eventRoutes');
const apiRoutes = require('./api');
const viewRoutes = require('./viewRoutes');

router.use('/', viewRoutes);
router.use('/api', apiRoutes);
router.use('/users', userRoutes);
router.use('/events', eventRoutes);

module.exports = router;
