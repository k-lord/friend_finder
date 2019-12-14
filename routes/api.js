var express = require('express');
var router = express.Router();
var data = require('../data/data');
var friends = data.friends;

/* GET /api/friends listing. */
router.get('/friends', function(request, response, next) {
  //response.send('respond with friends data');
  response.send(friends);
});

/* POST /api/friends new data */
router.post('/friends', function(request, response) {
  var newFriend = request.body;
  console.log(newFriend);
  friends.push(newFriend);
  response.json(newFriend);
  console.log(friends);
})

module.exports = router;
