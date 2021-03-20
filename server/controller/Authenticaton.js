const UserModel = require("../model/UserModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// handle errors
const handleErrors = err => {
  let errors = { name: "", email: "", password: "" };

  // duplicate email error
  if (err.code === 11000) {
    errors.email = "Email is already registered...";
    return errors;
  }

  // validation errors
  if (err.message.includes("usermodel validation failed")) {
    // (err);
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  if (err.message === "Incorrect email or password") {
    errors.email = "Incorrect email or password";
  }

  return errors;
};

//@method=get
//@desc=user login
module.exports.login_get = (req, res) => {
  res.json({ isAllowed: true });
};

//@method=get
//@desc=user signup
module.exports.signup_get = (req, res) => {
  res.json({ isAllowed: true });
};

//@methods=post
//@desc=user login
module.exports.login__post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await UserModel.login(email, password);

    const token = jwt.sign({ id: result._id }, process.env.SECRET_KEY);

    res.status(200).json({
      isAllowed: true,
      name: result.name,
      email: result.email,
      role: result.role,
      id: result._id,
      token,
    });
  } catch (error) {
    const errorResult = handleErrors(error);
    res.status(400).json({ errorResult });
  }
};

//@methods=post
//@desc=user signup
module.exports.signup__post = async (req, res) => {
  const user = new UserModel({ role: req.role, ...req.body });
  try {
    const result = await user.save();
    const token = jwt.sign({ id: result._id }, process.env.SECRET_KEY);

    res.status(200).json({
      isAllowed: true,
      name: result.name,
      email: result.email,
      role: result.role,
      id: result._id,
      token,
    });
  } catch (error) {
    const errorResult = handleErrors(error);
    res.status(400).json({ errorResult });
  }
};

//@method=patch
//@desc=user account update
module.exports.updateAccount__patch = async (req, res) => {
  const { name, email, password } = req.body;

  let newPassword = await bcrypt.hash(password, 10);

  try {
    const user = await UserModel.findByIdAndUpdate(
      req.userId,
      { name, email, password: newPassword },
      {
        runValidators: true,
        new: true,
      }
    );
    if (!user) {
      return res.status(401).json({ errorResult: "user not found" });
    }

    res.status(200).json({
      isAllowed: true,
      name: user.name,
      email: user.email,
      role: user.role,
      id: user._id,
    });
  } catch (error) {
    res.status(500).json({ errorResult: error });
  }
};

//@method=get
//@desc=user logout
module.exports.logout__get = (req, res) => {
  res.cookie("auth__token", "", { maxAge: 1 });
  res.redirect("/");
};
