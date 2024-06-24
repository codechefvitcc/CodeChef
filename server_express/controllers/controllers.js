const fetch = require("node-fetch");

// ************* Docs to work with Google Sheet Integration ******************
// https://docs.sheet.best/#generating-your-rest-api
// ***************************************************************************

const contactUsGoogleSheetLink =
  "https://sheet.best/api/sheets/d62f5c63-d82b-4188-9e19-b8711709ef35";

const joinUsGoogleSheetLink =
  "https://sheet.best/api/sheets/09cc0171-8d87-4ac1-b05c-898d0b799cf9";

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

// exporting the functions
module.exports = {
  readContactUsGoogleSheet,
  addContactUsEmailInGoogleSheet,
  readJoinUsDataFromGoogleSheet,
  addJoinUsDataInGoogleSheet,
};
