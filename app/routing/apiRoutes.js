var friends = require("../data/friends.js");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    
    var bestFriend = {
      name: "",
      photo: "",
      scoreDifference: 100000
    };

    var friendFacts = req.body;
    var friendName = friendFacts.name;
    var friendPhoto = friendFacts.photo;
    var friendScores = friendFacts.scores;

    var totalDifference = 0;
    for (var i = 0; i < friends.length; i++){
      totalDifference = 0;
    }

    for (var j = 0; j < friends[i].scores; j++){
      totalDifference += Math.abs(parseInt(friendScores[j]) - parseInt(friends[i].scores[j]));
      if (totalDifference <= bestFriend.scoreDifference){
        bestFriend.name = friends[i].name;
        bestFriend.photo. friends[i].photo;
        bestFriend.scoreDifference = totalDifference;
      }
    }
    });
  
}

