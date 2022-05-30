const express = require('express');
const {
  getGoals,
  createGoal,
  editGoal,
  deleteGoal,
} = require('../controllers/goalController');

const router = express.Router();

router.get('/', getGoals);
router.post('/', createGoal);
router.put('/:id', editGoal);
router.delete('/:id', deleteGoal);

module.exports = router;
