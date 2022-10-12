const router = require('express').Router();
const { Post, User } = require('../models');

router.get('/', async (req, res) => {
    try {
      const dbPostData = await Post.findAll({
        include: [
          {
            model: User,
            attributes: ['username'],
          },
        ],
      });
  
      res.render('all-posts', {dbPostData});
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

module.exports = router;