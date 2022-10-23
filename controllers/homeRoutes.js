const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [User]
    });
    const post = postData.map((post) => post.get({ plain: true }));
    res.render("all-posts", { post });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/posts/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        User
      ],
    });

    const post = postData.get({ plain: true });

    res.render("single-post", {post})
  
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
  res.render('login');
});


router.get('/dashboard', withAuth, async (req, res) => {
  const userPost = await Post.findAll({
    include: [
      {
        model: User
      }
    ],
    where: {
      user_id: req.session.user_id
    }
  });

  const post = userPost.map((post) => post.get({ plain: true }));
  res.render("all-posts-admin",{
    layout: "dashboard",
    post })

});

router.get('/create', withAuth, async (req, res) => {
  res.render("new-post",{
    layout: "dashboard"})
});




router.get('/signup', async (req, res) => {
  res.render('signup');
});


module.exports = router;