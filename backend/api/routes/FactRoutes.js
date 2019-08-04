module.exports = function(app) {
  var FactModel = require("../models/FactModel");
  var factList = require("../controllers/factController");

  

  // route
app.route("/getfact").get(factList.get_fact);


  // axios.get(apiUrl, config).then(res => {
  //   res.send(res.data.value);
  // console.log(res.data.icon_url);
  // this.setState({
  //   message: res.data.value,
  //   image: res.data.icon_url
  // });
  // });
};
