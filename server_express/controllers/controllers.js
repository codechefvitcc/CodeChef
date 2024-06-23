const fetch = require("node-fetch");

const readGoogleSheet = (req, res) => {
  // Parsed Format
  fetch("https://sheet.best/api/sheets/6d6a3b68-108c-4b78-86d9-c711683e7464")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((error) => {
      console.error("Error reading data:", error);
      res.status(500).json({ error: "Error reading data" });
    });
};

const addInGoogleSheet = (req, res) => {
  const { data } = req.body;
  console.log(data);

  fetch("https://sheet.best/api/sheets/6d6a3b68-108c-4b78-86d9-c711683e7464", {
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

module.exports = {
  readGoogleSheet,
  addInGoogleSheet,
};
