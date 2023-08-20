const { verifySignUp } = require("../middlewares");
const AuthController = require("../controllers/auth/index"); // Import the exported functions
const User = require("../models/user.model"); // Replace with the correct path to your User model
const Role = require("../models/role.model"); // Replace with the correct path to your Role model

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    next();
  });
  const authController = AuthController(User, Role); // Initialize the authentication functions

  const base_url = "/api/auth";

  app.post(
    `${base_url}/signup`,
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted,
    ],
    authController.signup
  );

  app.post(`${base_url}/signin`, authController.signin);

  app.post(`${base_url}/signout`, authController.signout);
};
