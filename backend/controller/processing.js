// route : /processing/data => POST
exports.postData = (req, res, next) => {
    try {
        console.log(req.files);
    } catch (err) {
        next(err);
    }
}

/*
(786, 101, 'A', 'Electrical Appliances'),
(786, 102, 'B', 'Utilities'),
(786, 103, 'C', 'Cleaning'),
(786, 104, 'D', 'Personal Care');
 */