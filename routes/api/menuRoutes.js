const router = require('express').Router();
const { Menu } = require('../../models');
const withAuth = require('../../utils/auth');

// GET all menus
router.get('/', async (req, res) => {
    try {
        const menuData = await Menu.findAll();
        res.json(menuData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET a single menu
router.get('/:id', async (req, res) => {
    try {
        const menuData = await Menu.findByPk(req.params.id);

        if (!menuData) {
            res.status(404).json({ message: 'No menu found with that id!' });
            return;
        }

        res.json(menuData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// POST a new menu
router.post('/', withAuth, async (req, res) => {
    try {
        const menuData = await Menu.create(req.body);
        res.status(200).json(menuData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// PUT (update) a menu
router.put('/:id', withAuth, async (req, res) => {
    try {
        const menuData = await Menu.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        if (!menuData[0]) {
            res.status(404).json({ message: 'No menu found with that id!' });
            return;
        }
        res.status(200).json(menuData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// DELETE a menu
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const menuData = await Menu.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (!menuData) {
            res.status(404).json({ message: 'No menu found with that id!' });
            return;
        }
        res.status(200).json(menuData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;