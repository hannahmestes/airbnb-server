'user strict';
var sql = require('./db.js');

//Task object constructor
var appModel = function(task){

};


appModel.getRats = function (Bid, result) {
        sql.query("Select * from Rat_Data_NK where bID = ? LIMIT 50", Bid, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
                }
            });   
};

appModel.getCrime = function (Bid, result) {
        sql.query("Select * from Crime_Reports_NK where bID = ? LIMIT 50", Bid, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
                }
            });   
};

appModel.getAirbnb = function (Bid, result) {
        sql.query("Select * from AirBnB_Data_NK where bID = ? LIMIT 50", Bid, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
                }
            });   
};


module.exports= appModel;