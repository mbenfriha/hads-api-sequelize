'use strict';
module.exports = (sequelize, DataTypes) => {
  const CategoryHad = sequelize.define('CategoryHad', {
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Category',
            key: 'id'
        }
    },
    had_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Had',
            key: 'id'
        }
    }
  }, {});
  CategoryHad.associate = function(models) {
  };
  return CategoryHad;
};