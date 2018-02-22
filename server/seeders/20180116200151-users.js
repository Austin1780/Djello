"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    let users = [];
    for (let i = 0; i < 10; i++) {
      users.push({
        username: `username${i}`,
        password: `password${i}`
      });
    }
    return queryInterface.bulkInsert("Users", users);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
