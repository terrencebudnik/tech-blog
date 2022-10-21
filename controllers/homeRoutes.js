const router = require('express').Router();
const { Post, User } = require('../models');


router.get('/', async (req, res) => {
    res.render('all-posts');
  
});

router.get('/login', async (req, res) => {
  res.render('login');
});

router.get('/dashboard', async (req, res) => {
  res.render('dashboard');
});


router.get('/signup', async (req, res) => {
  res.render('signup');
});

module.exports = router;