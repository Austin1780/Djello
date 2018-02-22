"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    let boards = [];
    for (let i = 0; i < 10; i++) {
      boards.push({
        title: `title${i}`,
        userId: 1
      });
    }
    return queryInterface.bulkInsert("Boards", boards);
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
