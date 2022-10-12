const router = require('express').Router();
const signUpRoutes = require('./signup.js');

router.get('/', async (req, res) => {
    res.render('login');
});

router.use('/signup', signUpRoutes);

module.exports = router;