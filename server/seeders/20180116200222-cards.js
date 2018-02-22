"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    let cards = [];
    for (let i = 0; i < 10; i++) {
      cards.push({
        title: `title${i}`,
        description: "example description",
        listId: i
      });
    }
    return queryInterface.bulkInsert("Cards", cards);
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
