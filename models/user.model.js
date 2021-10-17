const config = require('config');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  displayName: {
    type: String,
    required: true,
    minLength: 5
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minLength: 3
  }
});

UserSchema.methods.generateAuthToken = () => {
  const token = jwt.sign({ _id: this._id }, config.get('myprivatekey'));
  return token;
}

const User = mongoose.model('User', UserSchema);

const validateUser = user => {
  const schema = {
    displayName: Joi.string().min(5).max(25).required(),
    email: Joi.string().min(5).max(25).required().email(),
    password: Joi.string().min(6).max(255).required()
  }

  return Joi.validate(user, schema);
}

exports.User = User
exports.validate = validateUser;
