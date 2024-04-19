const express = require('express');
const router = express.Router();
const processingController = require('../controller/processing')
const parseQueryString = require('../middleware/parseQueryString');

// ---------------------------------- Multer Setup : 
const multer = require('multer');// for "multipart/form-data"
const fileStorage = multer.diskStorage({// multer storage configuration
    destination: (req, file, setDestination) => {
        setDestination(null, "Data");// null meaning no error, if error then pass error object
        // "images" will become the folder name
    },
    filename : (req, file, storeFile) => {
        storeFile(null, file.originalname);// null meaning no error, if error then pass error object
        // second argument represents the file name
    }
});

// The below will filter file formats meaning, it will only allow file extensions that I set.
const fileFilter = (req, file, cb) => {// only allows files with specific mimetype
    if(file.mimetype === "application/vnd.ms-excel" || file.mimetype === "	application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" || file.mimetype === "text/csv"){
        cb(null, true)// true meaning, allow this mimetype
    }else{
        cb(null, false)// false meaning, dont allow
    }
}


// route : /processing/data?adminId => POST
router.post('/data', parseQueryString, multer({storage:fileStorage, fileFilter:fileFilter}).any(),processingController.postData);

router.get('/demand', parseQueryString, processingController.getDemandGraph);

module.exports = router;