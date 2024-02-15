const router = require('express').Router();
const { Reservation } = require('../../models');
const withAuth = require('../../utils/auth');

// GET all reservations
router.get('/', withAuth, async (req, res) => {
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
router.post('/', withAuth, async (req, res) => {
    try {
        const reservationData = await Reservation.create({
            reservation_date: req.body.date,
            reservation_time: req.body.time,
            reservation_guests: req.body.guests,
        });
        res.status(200).json(reservationData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// PUT (update) a reservation
router.put('/:id', withAuth, async (req, res) => {
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
router.delete('/:id', withAuth, async (req, res) => {
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

// The code above is similar to the code in menuRoutes.js, but with a few key differences.




