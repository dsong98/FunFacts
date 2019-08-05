
var express = require("express"),
var cors = require("cors"),
app = express(),
PORT = 4000,
mongoose = require('mongoose'),
Fact = require('./api/models/factModel'),
bodyParser = require('body-parser');

var FactRoute = require('./api/routes/FactRoutes');

// Mongoose
// const url = 'mongodb://localhost:4000/testdb';
// mongoose.Promise = global.Promise;
// mongoose.connect(url, { useNewUrlParser: true });

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors);
// app.use(function(req, res) {
//   res.status(404).send({url: req.originalUrl + ' not found'})
// })

app.use('/getfact', FactRoute);


// routes(app);

app.listen(PORT, () => {
console.log("Listening on port: " + PORT);
});


// var express = require("express"),
//   app = express(),
//   PORT = 4000,
//   mongoose = require('mongoose'),
//   Task = require('./api/models/todoListModel'),
//   bodyParser = require('body-parser');

// // Mongoose
// const url = 'mongodb://localhost/testdb';
// mongoose.Promise = global.Promise;
// mongoose.connect(url, { useNewUrlParser: true });

// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());
// // app.use(function(req, res) {
// //   res.status(404).send({url: req.originalUrl + ' not found'})
// // })

// var routes= require('./api/routes/todoListRoutes');
// routes(app);

// app.listen(PORT, () => {
//   console.log("Listening on port: " + PORT);
// });
