const express = require("express");
const passport = require("passport");

const UsersController = require("../../controllers/users.controller");
const User = require('../../models/user.model');
const router = express.Router();

router.get("/test", (req, res) => res.json({ msg: "This is the users route for ecommerce" }));

router.get("/test2", (req, res) => {
  User.find()
    .then(user => {
      res.setHeader('Content-Type', 'application/json');
      res.json(user);
    })
    .catch(err => res.status(404).json({error: "Cannot find user"}));
})


router.get("/current", passport.authenticate('jwt', { session: false }), (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.json({
    _id: req.user.id,
    displayName: req.user.displayName,
    email: req.user.email
  })
})

router.post("/signup", UsersController.signUpUser);
router.post("/login", UsersController.loginUser);

// router.post("/", async (req, res) => {

//   // validate request body first
//   const { error } = validate(req.body);
//   if (error) return res.status(400).send(error.details[0].message);

//   // find an exisiting user
//   let user = await User.findOne({email: req.body.email});

//   if (user) return res.status(400).send("User already registered");

//   user = new User({
//     displayName: req.body.displayName,
//     email: req.body.email,
//     password: req.body.password
//   })

//   user.password = await bcrypt.hash(user.password, 10);
//   await user.save();

//   const token = user.generateAuthToken();
//   res.header("x-auth-token", token).send({
//     _id: user._id,
//     displayName: user.displayName,
//     email: user.email
//   });
// })

module.exports = router;