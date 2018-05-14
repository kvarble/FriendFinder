var path = require("path")
var friends = require("../data/friends.js");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    
    var bestFriend = {
      name: "",
      photo: "",
      scoreDifference: 100
    };

    var userData = req.body;
    var friendName = userData.name;
    var friendPhoto = userData.photo;
    var friendScores = userData.scores;

    var totalDifference = 0;
    for (var i = 0; i < friends.length; i++){
      totalDifference = 0;
    // console.log(friends)

    for (var j = 0; j < friends[i].scores[j]; j++){
      totalDifference += Math.abs(parseInt(friendScores[j]) - parseInt(friends[i].scores[j]));
      if (totalDifference <= bestFriend.scoreDifference){
        bestFriend.name = friends[i].name;
        bestFriend.photo = friends[i].photo;
        bestFriend.scoreDifference = totalDifference;
      }
    }
  }
    });
  
}

