'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
<<<<<<< HEAD
    id: DataTypes.INTEGER,
    name: DataTypes.STRING(100),
    email: DataTypes.STRING(100),
    verified_email: DataTypes.BOOLEAN,
    is_admin: DataTypes.BOOLEAN,
    phone: DataTypes.STRING(20),
    password: DataTypes.STRING(50),
  }, {
    sequelize,
    modelName: 'User',
=======
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    verified_email: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      default: false    // Valor padrão do campo
    },
    is_admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      default: false
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(200),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
>>>>>>> 650ee2f4e47e1910ca3c742cd6075db8316edd75
  });
  return User;
};