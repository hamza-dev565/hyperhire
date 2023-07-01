'use strict';
const {
  Model
} = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    static associate(models) {
      // define association here
    }
  }
  Book.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    discountRate: DataTypes.DECIMAL,
    image: DataTypes.STRING,
    price: DataTypes.DECIMAL,
  }, {
    sequelize,
    modelName: "Book",
  });
  return Book;
};
