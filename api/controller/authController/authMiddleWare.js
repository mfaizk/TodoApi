const jwt = require("jsonwebtoken");
const User = require("../../model/userModel");
const auth = async (req, res, next) => {
  const { SECRET } = process.env;
  const token = Object.keys(req.cookies);
  const data = jwt.decode(token[0], SECRET);
  if (!data) return res.status(401).send({ msg: "invalid cookie" });
  const u = await User.findOne({ email: data.email });
  const currentUser = {
    id: u.id,
    email: u.email,
  };
  req.user = currentUser;
  return next();
};

module.exports = auth;
