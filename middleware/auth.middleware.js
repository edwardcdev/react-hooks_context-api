const jwt = require("jsonwebtoken");
const config = require('config');

const auth = (req, res, next) => {
  const token = req.headers(["x-access-token" || req.headers("authorization")]);

  if (!token) {
    return res.status(401).send('Access denied. No token provided.');
  }

  try {
    const decoded = jwt.verify(token, config.get('myprivatekey'));
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).send("Invalid token");
  }
}

module.exports = auth;