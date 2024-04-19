const {DataTypes} = require('sequelize');
const sequelize = require('../util/database');

const Item = sequelize.define('item',{
    admin_id : {
        type:DataTypes.INTEGER,
        primaryKey:true
    },
    comp_id : { 
        type:DataTypes.INTEGER,
        primaryKey : true,
    },
    item_id : { 
        type:DataTypes.INTEGER,
        primaryKey : true,
    },
    item_name : {
        type : DataTypes.STRING(50),
    },
    item_quantity:{
        type : DataTypes.INTEGER
    },
    item_category:{
        type : DataTypes.STRING(50)
    },
},{
    tableName : 'item',
    timestamps : false
});

module.exports = Item;
