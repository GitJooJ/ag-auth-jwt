const express = require('express');
const { register, login, home } = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/home', authMiddleware, home);

module.exports = router;
