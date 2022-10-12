const router = require('express').Router();

const homeRoutes = require('./homepage.js');
const loginRoutes = require('./login.js');

router.use('/', homeRoutes);
router.use('/login', loginRoutes);

module.exports = router;