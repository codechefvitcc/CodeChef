const express = require("express");
const router = new express.Router();

const controller = require("../controllers/controllers");

router.post(
  "/api/v1/contact-us/add/email",
  controller.addContactUsEmailInGoogleSheet
);
router.get(
  "/api/v1/contact-us/read/emails",
  controller.readContactUsGoogleSheet
);

module.exports = router;
