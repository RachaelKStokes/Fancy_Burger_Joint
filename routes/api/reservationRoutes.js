const router = require('express').Router();
const { Reservation } = require('../../models');

   
// GET all reservations
router.get('/', async (req, res) => {
    try {
        const reservationData = await Reservation.findAll();
        res.json(reservationData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET a single reservation
router.get('/:id', async (req, res) => {
    try {
        const reservationData = await Reservation.findByPk(req.params.id);

        if (!reservationData) {
            res.status(404).json({ message: 'No reservation found with that id!' });
            return;
        }

        res.json(reservationData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// POST a new reservation
router.post('/', async (req, res) => {
    try {
        const reservationData = await Reservation.create(req.body);
        res.status(200).json(reservationData);
    } catch (err) {
        res.status(500).json({ error: 'Failed to create a reservation!'});
    }
});

// PUT (update) a reservation
router.put('/:id', async (req, res) => {
    try {
        const reservationData = await Reservation.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        if (!reservationData[0]) {
            res.status(404).json({ message: 'No reservation found with that id!' });
            return;
        }
        res.status(200).json(reservationData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// DELETE a reservation
router.delete('/:id', async (req, res) => {
    try {
        const reservationData = await Reservation.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (!reservationData) {
            res.status(404).json({ message: 'No reservation found with that id!' });
            return;
        }
        res.status(200).json(reservationData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;





