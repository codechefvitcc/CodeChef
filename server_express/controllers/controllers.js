const fetch = require("node-fetch");

const contactUsGoogleSheetLink =
  "https://sheet.best/api/sheets/6d6a3b68-108c-4b78-86d9-c711683e7464";

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

// exporting the functions
module.exports = {
  readContactUsGoogleSheet,
  addContactUsEmailInGoogleSheet,
};
