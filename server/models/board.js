"use strict";
module.exports = (sequelize, DataTypes) => {
  let Board = sequelize.define("Board", {
    title: DataTypes.STRING,
    userId: DataTypes.INTEGER
  });

  Board.associate = models => {
    Board.hasMany(models.List, {
      foreignKey: "boardId"
    });
    Board.belongsTo(models.User, {
      foreignKey: "userId"
    });
  };

  return Board;
};
