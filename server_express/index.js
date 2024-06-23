require("dotenv").config();
const router = require("./routes/router");
const controller = require("./controllers/controllers");

const express = require("express");
const app = express();

const cors = require("cors");

const PORT = 4002;

// middleware
app.use(express.json());
app.use(cors());

app.use(router);

// comment the below part later
app.get("/", controller.readGoogleSheet);

app.listen(PORT, () => {
  console.log(`Server start at Port No : http://localhost:${PORT}`);
});

// gitignore started to work