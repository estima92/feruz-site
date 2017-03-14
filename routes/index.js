var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/services', function(req, res, next) {
    res.render('services');
});
router.get('/about', function(req, res, next) {
    res.render('about');
});
router.get('/contacts', function(req, res, next) {
    res.render('contacts');
});


module.exports = router;
