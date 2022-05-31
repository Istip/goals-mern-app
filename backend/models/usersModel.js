const { Schema, model } = require('mongoose');

const userSchema = Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add your name!'],
    },
    email: {
      type: String,
      required: [true, 'Please add your email address!'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please add your password!'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model('User', userSchema);
