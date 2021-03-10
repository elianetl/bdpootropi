let {Sequelize, DataTypes} = require("sequelize");
let db = require("../connection");

const Pizza = db.define("Pizza",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nome : {
            type: DataTypes.STRING,
            allowNull: false
        },
        valor: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tamanho: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }
);

module.exports = Pizza; 

