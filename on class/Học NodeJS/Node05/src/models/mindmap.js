'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mindmap extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  mindmap.init({
    id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'mindmap',
  });
  return mindmap;
};