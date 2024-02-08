const Menu = require('../models/Menu');

module.exports = {
    async getAllGalleries(req, res) {
    try {
      const menus = await Menu.findAll();
      res.json(menus);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching menus');
    }
  },

  async getGalleryById(req, res) {
    try {
      const { id } = req.params;
      const menu = await Menu.findByPk(id);
      if (!menu) {
        return res.status(404).send('Menu not found');
      }
      res.json(menu);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching menu');
    }
  },

  async createMenu(req, res){
    try {
      const { name, description, price } = req.body;
      const menu = await Menu.create({ name, description, price });
      res.status(201).json(menu);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error creating menu');
    }
  },

  async updateMenu(req, res) {
    try {
      const { id } = req.params;
      const { name, description, price } = req.body;
      const menu = await Menu.findByPk(id);
      if (!menu) {
        return res.status(404).send('Menu not found');
      }
      menu.name = name;
      menu.description = description;
      menu.price = price;
      await menu.save();
      res.json(menu);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error updating menu');
    }
  },

  async deleteMenu(req, res) {
    try {
      const { id } = req.params;
      const menu = await Menu.findByPk(id);
      if (!menu) {
        return res.status(404).send('Menu not found');
      }
      await menu.destroy();
      res.send('Menu deleted successfully');
    } catch (error) {
      console.error(error);
      res.status(500).send('Error deleting menu');
    }
  }
};
