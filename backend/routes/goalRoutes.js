const express = require('express');
const {
  getGoals,
  createGoal,
  editGoal,
  deleteGoal,
} = require('../controllers/goalController');
const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', protect, getGoals);
router.post('/', protect, createGoal);
router.put('/:id', protect, editGoal);
router.delete('/:id', protect, deleteGoal);

module.exports = router;
