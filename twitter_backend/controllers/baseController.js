const router = require("express").Router();
const loginActivityController = require("./loginActivityController");

const baseController = () => {
    router.get("/", (req, res) => res.send("Hello there!!"));
    router.use("/login-acitvity", loginActivityController);

    return router;
};

module.exports = baseController;
