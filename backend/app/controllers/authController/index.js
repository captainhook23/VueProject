const signup = require("./signup");
const signin = require("./signin");
const signout = require("./signout");

module.exports = (User, Role) => ({
  signup: signup(User, Role),
  signin: signin(User),
  signout: signout,
});
