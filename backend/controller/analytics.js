const Compartment = require('../models/compartment');
const Item = require('../models/item');


// route : /processing/data => POST
exports.getCategories = async (req, res, next) => {
    try {
        const compartmentsList = await Compartment.findAll({
            attributes : ['comp_id','comp_name', 'comp_cat'],
            where : {
                admin_id : req.queryString.adminId
            }
        });

        res.status(200).json({compartmentsList : compartmentsList});        
    } catch (err) {
        next(err);
    }
}

// route : /processing/data => POST
exports.getItems = async (req, res, next) => {
    try {
        const comp_id = req?.params?.comp_id;
        if(!comp_id) throw new Error("Please select the appropriate component");
        const itemsList = await Item.findAll({
            attributes : ['item_id','item_name', 'item_category'],
            where : {
                admin_id : req.queryString.adminId,
                comp_id : comp_id
            }
        });

        res.status(200).json({itemsList : itemsList});        
    } catch (err) {
        next(err);
    }
}

// route : /processing/data => POST
exports.getDemandData = async (req, res, next) => {
    try {
        const admin_id = req?.queryString?.adminId;
        const comp_id = req?.queryString?.comp_id;
        const item_id = req?.queryString?.item_id;

        if(!comp_id || !item_id) throw new Error("Please specify appropriate data for either compartment or items ");

        const item = await Item.findOne({
            attributes : ["item_name", "item_category"],
            where : {
                admin_id : admin_id,
                comp_id : comp_id,
                item_id : item_id
            }
        });
        console.log(item.dataValues);
        res.status(200).json({message:"asldkjf"});
    } catch (err) {
        next(err);
    }
}
