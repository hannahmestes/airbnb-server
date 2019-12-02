var appStuff = require('../models/appmodel')

exports.getRats = function(req, res) {
    console.log(req.params);
  appStuff.getRats(req.params.Bid, function(err, rats) {
    if (err)
      res.send(err);
    res.json(rats);
  });
};

exports.getCrime = function(req, res) {
  appStuff.getCrime(req.params.Bid, function(err, rats) {
    if (err)
      res.send(err);
    res.json(rats);
  });
};

exports.getAirbnb = function(req, res) {
  appStuff.getAirbnb(req.params.Bid, function(err, rats) {
    if (err)
      res.send(err);
    res.json(rats);
  });
};