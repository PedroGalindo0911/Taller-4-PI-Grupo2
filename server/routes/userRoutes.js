const express = require('express');
const router = express.Router();
const {
  login,
  register,
  resetPassword,
} = require('../controllers/userController');

router.post('/login', login);

router.post('/register', register);

router.put('/reset-password', resetPassword);

module.exports = router;
