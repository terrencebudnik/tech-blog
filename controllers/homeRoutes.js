const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');



  router.get('/', async (req, res) => {
    try {
      const postData = await Post.findAll({
        include: [User]
      });
      const posts = postData.map((post) => post.get({ plain: true }));
      res.render("all-posts", { posts });
    } catch (err) {
      res.status(500).json(err);
    }
  });


router.get('/login', async (req, res) => {
  res.render('login');
});


router.get('/dashboard', withAuth, async (req, res) => {
    res.render("all-posts-admin", {
      layout: "dashboard",
    });
});


router.get('/signup', async (req, res) => {
  res.render('signup');
});


module.exports = router;