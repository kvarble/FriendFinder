var surveyData = require("../data/surveyData");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(surveyData);
  });

  app.post("/api/friends", function(req, res) {
    if (surveyData.length < 5) {
        surveyData.push(req.body);
        res.json(true);
      }
      else {
        waitListData.push(req.body);
        res.json(false);
      }
    });
  
}

