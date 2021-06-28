const express = require("express");
const axios = require("axios");
const router = express.Router();
const citybikeurl = "http://api.citybik.es/v2/networks/decobike-miami-beach";

router.get("/", (req, res) => {
  res.send({ response: "I am alive" }).status(200);
});

router.get("/cityBikeInformation", async (req, res) => {
  const response = await axios.get(citybikeurl);
  const { data: {network: {location, name, stations}} } = response;
  res.send({ location, name, stations }).status(200);
});
module.exports = router;
