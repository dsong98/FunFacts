var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var FactModel = new Schema({
  id: Number,
  fact: String
});

module.exports = mongoose.model("FactModel", FactModel);
