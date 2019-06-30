'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING
  }, {});
  Category.associate = function(models) {
      Category.belongsToMany(models.Had, {
          through: 'CategoryHad',
          as: 'categories',
          foreignKey: 'category_id'
      });
  };
  return Category;
};