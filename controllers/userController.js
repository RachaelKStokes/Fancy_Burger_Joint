const User = require('../models/User');

module.exports = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching users');
    }
  },

  getUserById: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).send('User not found');
      }
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching user');
    }
  },

  createUser: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.create({ email, password });
      res.status(201).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error creating user');
    }
  },

  updateUser: async (req, res) => {
    try {
      const { id } = req.params;
      const { email, password } = req.body;
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).send('User not found');
      }
      user.email = email;
      user.password = password;
      await user.save();
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error updating user');
    }
  },

  deleteUser: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).send('User not found');
      }
      await user.destroy();
      res.send('User deleted successfully');
    } catch (error) {
      console.error(error);
      res.status(500).send('Error deleting user');
    }
  }
};
