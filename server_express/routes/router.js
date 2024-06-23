const express = require("express");
const router = new express.Router();

const controller = require("../controllers/controllers");

router.post("/add", controller.addInGoogleSheet);
router.get("/read", controller.readGoogleSheet);

module.exports = router;
