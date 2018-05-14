var path = require("path");
var friends = require("../data/friends.js");

module.exports = function(app) {
console.log("RUNNING")
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {

    var possibleFriend = req.body;
    
    var bestFriend = {};
    var bestFriendOptions = 0;
    var bestFriendDifference = 100;

    for (var i = 0; i < friends.length; i++){
        var totalDifference = 0;

        for (var j = 0; j < friends[i].scores.length; j++){
            var scoreDifference = Math.abs(friends[i].scores[j] - possibleFriend.scores[j])
            totalDifference += scoreDifference;
        }
        if (totalDifference < bestFriendDifference){
            bestFriendOptions = i;
            bestFriendDifference = totalDifference
        }
    }

    bestFriend = friends[bestFriendOptions];
    friends.push(possibleFriend);
    res.json(bestFriend);
  })
}