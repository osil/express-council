const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

/* GET users listing. */
router.get("/", userController.index);
/* GET user by id. */
router.get("/userid/:id", userController.show);
/* GET studentstatus. */
router.get("/studentstatus", userController.studentstatus);
/* Insert users listing. */
router.post("/", userController.insert);

/* login users listing. */
router.post("/login", userController.login);

module.exports = router;
