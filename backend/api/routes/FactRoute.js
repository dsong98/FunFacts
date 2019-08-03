module.exports = function(app) {
    var FactModel = require("../models/FactModel");

    // route
    app.get('/', (req, res) => {
        res.send('Hello World!');
      });
}