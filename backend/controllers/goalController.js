const asyncHandler = require('express-async-handler');

const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get the goals' });
});

const createGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add value to text!');
  }
});

const editGoal = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json({ message: `Updating a goal with id: ${req.params.id}` });
});

const deleteGoal = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json({ message: `Deleting a goal with id: ${req.params.id}` });
});

module.exports = {
  getGoals,
  createGoal,
  editGoal,
  deleteGoal,
};
