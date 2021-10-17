const Validator = require('validator');
const validText = require('../valid-text.middleware');

module.exports = function validateSignUpInput(data) {
  let errors = {};

  data.displayName = validText(data.displayName) ? data.displayName : '';
  data.email = validText(data.email) ? data.email : '';
  data.password = validText(data.password) ? data.password : '';
  data.confirmPassword = validText(data.confirmPassword) ? data.confirmPassword : '';

  if (!Validator.isLength(data.displayName, { min: 2, max: 30 })) {
    errors.displayName = 'Display Name must be between 2 and 30 characters';
  }

  if (Validator.isEmpty(data.displayName)) {
    errors.displayName = 'Display Name field is required';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password must be at least 6 characters';
  }

  if (Validator.isEmpty(data.confirmPassword)) {
    errors.confirmPassword = 'Confirm Password field is required';
  }

  if (!Validator.equals(data.password, data.confirmPassword)) {
    errors.confirmPassword = 'Passwords must match';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};