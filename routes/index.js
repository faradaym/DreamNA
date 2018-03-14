var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'DreamNA' });
});
router.get('/video', function(req, res, next) {
  var optionals = {};
  optionals.videoTransforms = req.query.t || "";

  res.render('video', optionals);
});

module.exports = router;
