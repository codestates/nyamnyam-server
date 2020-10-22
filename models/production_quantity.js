'use strict';
const { Model } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
module.exports = (sequelize, DataTypes) => {
  class production_quantity extends Model {
    static associate(models) {
      this.belongsTo(models.weather, {
        foreignKey: 'weatherId',
      }); //1:1
      this.belongsTo(models.store_production, {
        foreignKey: 'store_productionId', //1:N 한 스토어에 여러 production_quantity
      });
    }
  }
  production_quantity.init(
    {
      store_productionId: DataTypes.INTEGER,
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      weatherId: DataTypes.INTEGER,
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      timestamps: true,
      modelName: 'production_quantity',
    }
  );
  return production_quantity;
};
