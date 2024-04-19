const {DataTypes} = require('sequelize');
const sequelize = require('../util/database');

const Admin = sequelize.define('admin',{
    admin_id : { 
        type:DataTypes.INTEGER,
        primaryKey : true,
    },
    name : {
        type : DataTypes.STRING(50),
    },
    email : {
        type: DataTypes.STRING(100),
        allowNull:false
    },
    password : {
        type: DataTypes.STRING(20),
        allowNull:false
    }
},{
    tableName : 'admin',
    timestamps : false
});

module.exports = Admin;
