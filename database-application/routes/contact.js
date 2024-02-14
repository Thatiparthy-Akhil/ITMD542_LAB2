var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('contact',{title: 'Contact Database Application'});
});

module.exports = router;
