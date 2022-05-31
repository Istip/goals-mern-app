const express = require('express');
const {
  registerUser,
  loginUser,
  getUser,
} = require('../controllers/userController');

const router = express.Router();

// Registering a new user
router.post('/', registerUser);

// Loging in the user
router.post('/login', loginUser);

// Get the user data
router.get('/me', getUser);

module.exports = router;
