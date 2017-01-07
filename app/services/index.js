const router = require('express').Router();
const login   = require('./login');

router.get('/', (req, res) => res.send('Auth working\n'));
router.use('/', login);

module.exports = router;