const Compartment = require('../models/compartment');
const Item = require('../models/item');
const { exec } = require('child_process');
const fs = require('fs');
const csv = require('csv-parser');


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
        // console.log(item.dataValues);

        const pythonScriptPath = '../aiml/src/prediction.py';
        const modelsPath = '../aiml/model';
        const filename = `predictions_${item.item_category}_${item.item_name}.csv`// 'predictions_{user_category}_{user_item}.csv'
        console.log(filename);
        exec(`python ${pythonScriptPath} "${item.item_category}" "${item.item_name}" "${modelsPath}"`, (err, stdoutpy, stderrpy) =>{
            if(err) return console.log("\nLogging Error : ", err);
            console.log("\nLogging Stdout : ", stdoutpy);
            console.log("\nLogging stderr : ", stderrpy);
            fs.readFile(filename, 'utf8', (err, data) => {
                if (err) {
                  console.error('Error reading CSV file:', err);
                  return;
                }
                console.log(data); // This will log the contents of the CSV file as a string

                const result = [];

                data.trim().split('\n').forEach(line => {
                    const [date, demand] = line.split(',');
                    result.push({date:date, demand:demand, name:date})
                });
                console.log(result);
                res.status(200).json({dateDemand : result});

              });

        });
    } catch (err) {
        next(err);
    }
}
