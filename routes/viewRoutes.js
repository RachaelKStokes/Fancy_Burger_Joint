const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    res.render('homepage', {
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/menu', async (req, res) => {
  try {
    res.render('menu', {
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).redirect('/login');
  }
});

router.get('/reservation', withAuth, async (req, res) => {
  try {

    res.render('reservation', {
      loggedIn: req.session.loggedIn,
    })
  } catch (err) {
    res.status(500).redirect('/login');
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      return res.redirect('/');
    });
  } else {
    return res.status(404).end();
  }
});

module.exports = router;

