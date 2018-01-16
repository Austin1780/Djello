("use strict");
module.exports = (sequelize, DataTypes) => {
  var Card = sequelize.define("Card", {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    listId: DataTypes.INTEGER
  });

  Card.associate = function(models) {
    Card.belongsTo(models.List, { foreignKey: "listId" });
  };

  return Card;
};
