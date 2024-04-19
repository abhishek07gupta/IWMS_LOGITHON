module.exports = (req, res, next) => {
    try {
        const adminId = req?.query?.adminId;
        if(!adminId) throw new Error("No Admin Id specified");
        req.queryString = {
            ...req.query
        }
        console.log(req.queryString);
        next();
    } catch (err) {
        next(err);
    }
}