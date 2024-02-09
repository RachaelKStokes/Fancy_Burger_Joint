const router = require('express').Router();
const { Event } = require('../../models');  
const withAuth = require('../../utils/auth');


// Get event routes
router.get('/', withAuth, async (req, res) => {
    try {
        const eventData = await Event.findAll({
            attributes: { exclude: ['password'] }
        });
        res.json(eventData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get a single event
router.get('/:id', async (req, res) => {
    try {
        const eventData = await Event.findByPk(req.params.id, {
            attributes: { exclude: ['password'] }
        });

        if (!eventData) {
            res.status(404).json({ message: 'No event found with that id!' });
            return;
        }

        res.json(eventData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Post a new event
router.post('/', async (req, res) => {
    try {
        const eventData = await Event.create(req.body);
        req.session.save(() => {
            req.session.event_id = eventData.id;
            req.session.loggedIn = true;
            res.status(200).json(eventData);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

// Update an event
router.put('/:id', async (req, res) => {
    try {
        const eventData = await Event.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        if (!eventData[0]) {
            res.status(404).json({ message: 'No event found with that id!' });
            return;
        }
        res.status(200).json(eventData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Delete an event
router.delete('/:id', async (req, res) => {
    try {
        const eventData = await Event.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (!eventData) {
            res.status(404).json({ message: 'No event found with that id!' });
            return;
        }
        res.status(200).json(eventData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;