const router = require("express").Router();
const loginServices = require("../services/loginActivityServices");

router.post("/signInUser", (req, res) => {
    loginServices
        .signInUser(req, req.body)
        .then((result) => {
            res.status(result.statusCode).send(result);
        })
        .catch((err) => res.status(500).send("Erro occured: " + err));
});

router.post("/signOutUser", (req, res) => {
    loginServices
        .signOutUser(req)
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((err) => res.status(500).send("Error occured: " + err));
});

router.post("/createUser", (req, res) => {
    loginServices
        .createUser(req.body)
        .then((result) => {
            res.status(result.statusCode).send(result);
        })
        .catch((err) => res.status(500).send("Error occured: " + err));
});

router.post("/deleteUser", (req, res) => {
    loginServices
        .deleteUser(req.body)
        .then((result) => {
            res.status(result.statusCode).send(result);
        })
        .catch((err) => res.status(500).send("Error occured: " + err));
});

router.post("/checkSession", (req, res) => {
    let sessionStatus = loginServices.checkSession(req);
    res.status(200).send({ sessionStatus: sessionStatus });
});

module.exports = router;
