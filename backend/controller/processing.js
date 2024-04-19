// route : /processing/data => POST
exports.postData = (req, res, next) => {
    try {
        console.log(req.files);
    } catch (err) {
        next(err);
    }
}
