"use strict";
let axios = require("axios");

const apiUrl =
  "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random";

let config = {
  headers: {
    "x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
    "x-rapidapi-key": "9131989ee8mshbcf45cebe8333f2p1cea31jsn5c6c9fbf16fb",
    accept: "application/json"
  }
};

// var mongoose = require("mongoose"),
//   Fact = mongoose.model("Facts");

exports.get_fact = function(req, res) {
    axios.get(apiUrl, config).then(result => {
        res.send(result);
    })
};
