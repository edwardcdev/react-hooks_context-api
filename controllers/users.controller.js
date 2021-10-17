const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

const { User, validate } = require("../models/user.model");

const validateSignUpInput = require("../middleware/auth/signup.middleware");
const validateLoginInput = require("../middleware/auth/login.middleware");

exports.signUpUser = (req, res) => {
  const { errors, isValid } = validateSignUpInput(req.body);

  if (!isValid) return res.status(400).json(errors);

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = "User already exists";
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        displayName: req.body.displayName,
        email: req.body.email,
        password: req.body.password
      });
      bcrypt.genSalt(10, (error, salt) => {
        bcrypt.hash(newUser.password, salt, (error, hash) => {
          if (error) throw error;
          newUser.password = hash;
          newUser.save().then(user => {
            const payload = {
              id: user.id,
              displayName: user.displayName,
              email: user.email
            }

            jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            });
          })
        })
        // res.status(200).send({ success: "User has been created!" });
      })
    }
  }).catch(error => console.log(error))
}

exports.loginUser = (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;
  User.findOne({ email }).then(user => {
    if (!user) {
      return res.status(404).json({email: "This user doesn't exist!"})
    }

    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = { id: user.id, displayName: user.displayName, email: user.email };

        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 }, //expires in one hour
          (error, token) => {
            res.json({
              success: true,
              token: 'Bearer ' + token
            });
          }
        )
        // res.status(200).send({ success: "User has been logged in" });
      } else {
        return res.status(400).json({ password: 'Incorrect Password'})
      }
    })
  })
}