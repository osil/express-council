const express = require("express");
const router = express.Router();
const councilController = require("../controller/councilController");

/* GET users listing. */
router.get("/", councilController.index);
router.get("/getRegularity", councilController.getRegularity);
router.get("/getRules", councilController.getRules);
router.get("/getDictation", councilController.getDictation);
router.get("/getAnnounce", councilController.getAnnounce);

module.exports = router;
