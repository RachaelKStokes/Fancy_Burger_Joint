const Event = require('../models/Event');

module.exports = {
   async getAllEvents  (req, res) {
    try {
      const events = await Event.findAll();
      res.json(events);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching events');
    }
  },

   async getEventById(req, res) {
    try {
      const { id } = req.params;
      const event = await Event.findByPk(id);
      if (!event) {
        return res.status(404).send('Event not found');
      }
      res.json(event);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching event');
    }
  },

    async createEvent(req, res) {
    try {
      const { name, date, location } = req.body;
      const event = await Event.create({ name, date, location });
      res.status(201).json(event);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error creating event');
    }
  },

    async updateEvent(req, res) {
    try {
      const { id } = req.params;
      const { name, date, location } = req.body;
      const event = await Event.findByPk(id);
      if (!event) {
        return res.status(404).send('Event not found');
      }
      event.name = name;
      event.date = date;
      event.location = location;
      await event.save();
      res.json(event);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error updating event');
    }
  },

  async deleteEvent(req, res) {
    try {
      const { id } = req.params;
      const event = await Event.findByPk(id);
      if (!event) {
        return res.status(404).send('Event not found');
      }
      await event.destroy();
      res.send('Event deleted successfully');
    } catch (error) {
      console.error(error);
      res.status(500).send('Error deleting event');
    }
  }
};
