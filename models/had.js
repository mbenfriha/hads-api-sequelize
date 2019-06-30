'use strict';
module.exports = (sequelize, DataTypes) => {
  const Had = sequelize.define('Had', {
    title: DataTypes.STRING,
    classification_id: DataTypes.INTEGER,
    text: DataTypes.TEXT,
    arabe: DataTypes.TEXT
  }, {});
  Had.associate = function(models) {
      Had.belongsToMany(models.Category, {
          through: 'CategoryHad',
          as: 'categories',
          foreignKey: 'had_id'
      });
  };
  return Had;
};