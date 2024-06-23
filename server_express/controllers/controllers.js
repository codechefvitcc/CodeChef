const fetch = require("node-fetch");

const sheetDBUrl = "https://sheetdb.io/api/v1/wxu8dadwi836j";

const addInGoogleSheet = (req, res) => {
  const { data } = req.body;

  fetch(sheetDBUrl, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: data, // Use the data from the request body
    }),
  })
    .then((response) => response.json())
    .then((data) => res.json(data))
    .catch((error) => res.status(500).json({ error: "Error adding data" }));
};

const readGoogleSheet = (req, res) => {
  fetch(sheetDBUrl)
    .then((response) => response.json())
    .then((data) => res.json(data))
    .catch((error) => res.status(500).json({ error: "Error reading data" }));
};

module.exports = {
  addInGoogleSheet,
  readGoogleSheet,
};
