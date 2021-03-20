const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a name"],
    minlength: [4, "Minimum name length is 4"],
    maxlength: [15, "Maximum name length is 15"],
  },
  email: {
    type: String,
    required: [true, "Please enter an email"],
    lowercase: true,
    unique: true,
    validate: [isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minlength: [6, "Minimum password length is 6 characters"],
    validate(val) {
      if (val.toLowerCase() === "password") {
        throw Error(`Password should not contain "password"`);
      }
    },
  },
  role: {
    type: String,
    required: true,
  },
});

UserSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

UserSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });

  if (user) {
    const comparedPassword = await bcrypt.compare(password, user.password);
    if (comparedPassword) {
      return user;
    }
    throw Error("Incorrect email or password");
  }
  throw Error("Incorrect email or password");
};

const UserModel = mongoose.model("UserModel", UserSchema);

module.exports = UserModel;
