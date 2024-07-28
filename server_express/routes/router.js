const express = require("express");
const router = new express.Router();

const controller = require("../controllers/controllers");

// contact us google sheet apis
router.post(
  "/api/v1/contact-us/add/email",
  controller.addContactUsEmailInGoogleSheet
);
router.get(
  "/api/v1/contact-us/read/emails",
  controller.readContactUsGoogleSheet
);
// **********************************

// join us google sheet apis

router.get("/api/v1/join-us/read/all-data",controller.readJoinUsDataFromGoogleSheet)

router.post("/api/v1/join-us/add/data", controller.addJoinUsDataInGoogleSheet)

router.post(
  "/api/v1/join-us/send-group-link",
  controller.sendWhatsAppJoinEmail
);

module.exports = router;
