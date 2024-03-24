var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Musicians Website' });
});

router.get('/karan', function(req, res, next) {
  res.render('karan');
});

router.get('/sidhu', function(req, res, next) {
  res.render('sidhu');
});

router.get('/arjan', function(req, res, next) {
  res.render('arjan');
});

router.get('/ms_pooja', function(req, res, next) {
  res.render('ms_pooja');
});

module.exports = router;
