const Reservation = require('../models/Reservation');

module.exports = {
  async getAllReservations(req, res) {
    try {
      const reservations = await Reservation.findAll();
      res.json(reservations);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching reservations');
    }
  },

  async getReservationById(req, res) {
    try {
      const { id } = req.params;
      const reservation = await Reservation.findByPk(id);
      if (!reservation) {
        return res.status(404).send('Reservation not found');
      }
      res.json(reservation);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching reservation');
    }
  },

  async createReservation(req, res) {
    try {
      const { reservation_date, reservation_time, reservation_guests } = req.body;
      const reservation = await Reservation.create({ reservation_date, reservation_time, reservation_guests });
      res.status(201).json(reservation);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error creating reservation');
    }
  },

  async updateReservation(req, res) {
    try {
      const { id } = req.params;
      const { reservation_date, reservation_time, reservation_guests } = req.body;
      const reservation = await Reservation.findByPk(id);
      if (!reservation) {
        return res.status(404).send('Reservation not found');
      }
      reservation.reservation_date = reservation_date;
      reservation.reservation_time = reservation_time;
      reservation.reservation_guests = reservation_guests;
      await reservation.save();
      res.json(reservation);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error updating reservation');
    }
  },

  async deleteReservation(req, res) {
    try {
      const { id } = req.params;
      const reservation = await Reservation.findByPk(id);
      if (!reservation) {
        return res.status(404).send('Reservation not found');
      }
      await reservation.destroy();
      res.json(reservation);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error deleting reservation');
    }
  }
};