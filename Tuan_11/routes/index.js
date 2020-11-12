var express = require('express');
var router = express.Router();
var path = require('path');
var dataModel = require('../model/connectDB')
/* GET home page. */
router.get('/', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../views/home.html'));
});
/* GET home page. */
router.post('/', function (req, res, next) {
  var { valueX, valueY } = req.body;
  dataModel.create({
    valueX: valueX,
    valueY: valueY
  })
  res.redirect('/');
});
/* GET home page. */
router.get('/data', function (req, res, next) {
  dataModel.find({})
    .then((data) => {
      return res.json(data);
    })
});

module.exports = router;
