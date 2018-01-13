"use strict";
module.exports = (sequelize, DataTypes) => {
  var boardInvitation = sequelize.define(
    "boardInvitation",
    {
      userId: DataTypes.INTEGER,
      boardId: DataTypes.INTEGER
    },
    {
      classMethods: {
        associate: function(models) {
          boardInvitation.belongsTo(models.User, {
            foreignKey: "userId"
          });
          boardInvitation.belongsTo(models.Board, {
            foreignKey: "boardId"
          });
        }
      }
    }
  );
  return boardInvitation;
};
