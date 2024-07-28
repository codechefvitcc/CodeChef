const fetch = require("node-fetch");

// Email sending packages and config. ********
const nodemailer = require("nodemailer");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "vitcseguide@gmail.com",
    pass: "gvdt kqqs zzvr vfib",
  },
});
// *****************************************

// ************* Docs to work with Google Sheet Integration ******************
// https://docs.sheet.best/#generating-your-rest-api
// ***************************************************************************

const contactUsGoogleSheetLink =
  "https://sheet.best/api/sheets/d62f5c63-d82b-4188-9e19-b8711709ef35";

const joinUsGoogleSheetLink =
  "https://sheet.best/api/sheets/4a530dd9-cd9b-45e7-b01c-1165bb1e747a";

// ***************** Contact us APIs Start Here ***********************************
// reading all the emails from the Contact Us Google Sheet
const readContactUsGoogleSheet = (req, res) => {
  // Parsed Format
  fetch(contactUsGoogleSheetLink)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      res.status(200).json(data);
    })
    .catch((error) => {
      console.error("Error reading data:", error);
      res.status(500).json({ error: "Error reading data" });
    });
};

// adding new email in the contact us google sheet
const addContactUsEmailInGoogleSheet = (req, res) => {
  const { data } = req.body;
  //console.log("What we got from frontend:", req.body);

  fetch(contactUsGoogleSheetLink, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      // The response comes here
      console.log(data);
      res.json(data);
    })
    .catch((error) => {
      // Errors are reported there
      console.log(error);
      res.status(500).json({ error: "Error adding data" });
    });
};
// ***************** Contact us APIs Ends Here ***********************************

// ***************** Join us APIs Starts Here ************************************
const addJoinUsDataInGoogleSheet = (req, res) => {
  const { data } = req.body;
  //console.log("What we got from frontend:", req.body);

  fetch(joinUsGoogleSheetLink, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      // The response comes here
      console.log(data);
      res.json(data);
    })
    .catch((error) => {
      // Errors are reported there
      console.log(error);
      res.status(500).json({ error: "Error adding data" });
    });
};

const readJoinUsDataFromGoogleSheet = (req, res) => {
  // Parsed Format
  fetch(joinUsGoogleSheetLink)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      res.status(200).json(data);
    })
    .catch((error) => {
      console.error("Error reading data:", error);
      res.status(500).json({ error: "Error reading data" });
    });
};

const sendWhatsAppJoinEmail = (req, res) => {
  const whatsAppGroupLinks = {
    management: "https://chat.whatsapp.com/KGPTyNobdEo0JLdTGFJUUD",
  };

  const { userEmail, department } = req.body;

  if (!userEmail) {
    return res.status(400).json({ error: "Please Provide Email" });
  }

  if (!whatsAppGroupLinks[department]) {
    return res.status(400).json({ error: "Invalid department" });
  }

  const mailOptions = {
    from: "vitcseguide@gmail.com",
    to: userEmail,
    subject: "Sending Email For Joining our whatsapp group",
    text: `WhatsApp Group Link:- ${whatsAppGroupLinks[department]}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("error", error);
      return res.status(400).json({ message: "email not sent" });
    } else {
      console.log("Email sent", info.response);
      return res.status(200).json({ message: "email sent Successfully" });
    }
  });
};

// exporting the functions
module.exports = {
  readContactUsGoogleSheet,
  addContactUsEmailInGoogleSheet,
  readJoinUsDataFromGoogleSheet,
  addJoinUsDataInGoogleSheet,
  sendWhatsAppJoinEmail,
};
