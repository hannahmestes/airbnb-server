var express = require('express');
var router = express.Router();
var appController = require('../controllers/appcontroller');

router.get('/', (req, res) => {
    res.send('An alligator approaches!');
});

router.get('/airbnb/:Bid', appController.getAirbnb)

router.get('/rat/:Bid', appController.getRats)

router.get('/crime/:Bid', appController.getCrime)

module.exports = router;
