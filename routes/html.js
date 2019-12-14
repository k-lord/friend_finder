var express = require('express');
var router = express.Router();
var path = require('path');

/* GET root page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Friend Finder' });
});

/* GET survey page */
router.get('/survey', function(request,response) {
  response.sendFile(path.join(__dirname, "../public/survey.html"))

})

module.exports = router;
