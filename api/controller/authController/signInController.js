const User = require("../../model/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const SignInController = async (req, res) => {
  const { email, password } = req.body;
  const { SECRET } = process.env;

  if (!email && !password) {
    return res.status(401).send({ msg: "invalid information" });
  }
  let salt = await bcrypt.genSalt(10);

  const user = await User.findOne({ email });
  //   console.log(await bcrypt.compare(password, user.password));
  if (!(await bcrypt.compare(password, user.password))) {
    return res.status(401).send({ msg: "Invalid password" });
  }

  let token = jwt.sign({ email }, SECRET);
  user.password = undefined;
  return res
    .status(201)

    .cookie(token, { secure: true, httpOnly: true })
    .send({
      msg: "Logged In sucessFul",
      user,
      token,
    });
};

module.exports = SignInController;
