const { Model, DataTypes } = require('sequelize');
const sequelize = require("../config/connection");



class View extends Model {}

View.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      
    },
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'view',
    }
  );
  
  module.exports = View;
  