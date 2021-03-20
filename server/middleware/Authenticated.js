const jwt = require("jsonwebtoken");

const Authenticated = (req, res, next) => {
  const token = req.cookies.auth__token;
  console.log(token);
  if (!token) return res.json({ isAllowed: false });

  const verified = jwt.verify(token, process.env.SECRET_KEY);

  if (verified) {
    req.userId = verified.id;
    next();
  } else {
    console.log("invalid");
    next();
  }
};

module.exports = Authenticated;
