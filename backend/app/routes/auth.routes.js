const { verifySignUp } = require("../middlewares");
const AuthController = require("../controllers/authController/index"); 
const User = require("../models/user.model"); 
const Role = require("../models/role.model");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    next();
  });
  const authController = AuthController(User, Role);

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
