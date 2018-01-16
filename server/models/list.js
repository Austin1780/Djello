("use strict");
module.exports = (sequelize, DataTypes) => {
  var List = sequelize.define("List", {
    title: DataTypes.STRING,
    boardId: DataTypes.INTEGER
  });

  List.associate = models => {
    List.hasMany(models.Card, { foreignKey: "listId" });
    List.belongsTo(models.Board, { foreignKey: "boardId" });
  };
  return List;
};
