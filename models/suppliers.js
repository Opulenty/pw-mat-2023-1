'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Suppliers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Suppliers.init({
  id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
  },
  name: {
      type: Sequelize.STRING(100),
      allowNull: false
  },
  address: {
      type: Sequelize.STRING
  },
  phone: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Suppliers',
  });
  return Suppliers;
};