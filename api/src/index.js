const axios = require("axios");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT | 4000;

app.use(cors());

app.get("/", (req, res) => {
  res.json("Hello");
});

app.get("/products", (req, res) => {
  const options = {
    method: "GET",
    url: "https://api.escuelajs.co/api/v1/products",
  };
  axios.request(options).then((response) => {
    res.json(response.data);
  });
});

app.listen(port, () => {
  console.log(`App listening in http://localhost:${port}`);
});
