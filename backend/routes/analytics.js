const express = require('express');
const router = express.Router();
const analyticsController = require('../controller/analytics')
const parseQueryString = require('../middleware/parseQueryString')

// route : /analytics/compartments?adminId => GET
router.get('/compartments', parseQueryString, analyticsController.getCompartments);

router.get('/compartment/:comp_id', parseQueryString, analyticsController.getItems);

router.get('/demanddata', parseQueryString, analyticsController.getDemandData);

module.exports = router;