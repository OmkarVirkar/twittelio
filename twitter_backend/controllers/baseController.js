const router = require("express").Router();
const loginActivityController = require("./loginActivityController");

const baseController = () => {
  router.use("/login-acitvity", loginActivityController);

  return router;
};

module.exports = baseController;
