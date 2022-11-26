const User = require("../../model/userModel");
const bcrypt = require("bcryptjs");
const SignUpController = async (req, res) => {
  const { SECRET } = process.env;
  const { email, password } = req.body;
  if (!email && !password)
    return res.status(401).send({ msg: "invalid information" });
  const user = await User.findOne({ email });
  if (user) {
    return res.status(401).send({ msg: "user already exist" });
  }
  let salt = await bcrypt.genSalt(10);
  let hashPassword = await bcrypt.hash(password, salt);
  const createdUser = await User.create({
    email,
    password: hashPassword,
  });
  createdUser.password = undefined;
  res.status(200).send({ createdUser });
};

module.exports = SignUpController;
