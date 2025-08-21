'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class playerstart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.footballdb, {foreignKey: "playerId", as:'footballdb'})
      // define association here
    }
  }

  const{v4:uuidv4}= require("uuid")
  playerstart.init({
    id:{type:DataTypes.UUID,primaryKey:true,defaultValue:uuidv4},
    Goals: DataTypes.STRING,
    Assist: DataTypes.STRING,
    Redcard: DataTypes.INTEGER,
    Yellowcard: DataTypes.INTEGER,
    playerId:DataTypes.UUID,
  }, {
    sequelize,
    modelName: 'playerstart',
  });
  return playerstart;
};