const express = require('express');
const router = express.Router();
const analyticsController = require('../controller/analytics')
const parseQueryString = require('../middleware/parseQueryString')

// route : /analytics/categories?adminId => GET
router.get('/categories', parseQueryString, analyticsController.getCategories);

router.get('/category/:comp_id', parseQueryString, analyticsController.getItems);

router.get('/demanddata', parseQueryString, analyticsController.getDemandData);

module.exports = router;