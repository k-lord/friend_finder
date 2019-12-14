var express = require('express');
var router = express.Router();
var data = require('../data/data');
var friends = data.friends;

/* GET /api/friends listing. */
router.get('/friends', function(req, res, next) {
  res.send('respond with friends data');
});

/* POST /api/friends new data */
router.post('/friends', function(request, response) {
  var newFriend = request.body;
  console.log(newFriend);
  friends.push(newFriend);
  response.json(newFriend);
})

module.exports = router;
