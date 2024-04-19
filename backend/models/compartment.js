const {DataTypes} = require('sequelize');
const sequelize = require('../util/database');

const Compartment = sequelize.define('compartment',{
    admin_id : {
        type:DataTypes.INTEGER,
        primaryKey:true
    },
    comp_id : { 
        type:DataTypes.INTEGER,
        primaryKey : true,
    },
    comp_name : {
        type : DataTypes.STRING(50),
    },
    comp_cat : { // category like [daily]
        type: DataTypes.STRING(50),
    }
},{
    tableName : 'compartment',
    timestamps : false
});

module.exports = Compartment;
