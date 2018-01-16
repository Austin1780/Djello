"use strict";
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define("User", {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  });

  User.associate = models => {
    User.hasMany(models.boardInvitation, {
      foreignKey: "userId"
    });
  };

  return User;
};
