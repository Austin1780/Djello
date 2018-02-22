"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    let lists = [];
    for (let i = 0; i < 10; i++) {
      lists.push({
        title: `list${i}`,
        boardId: i
      });
    }
    return queryInterface.bulkInsert("Lists", lists);
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
