'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('weather', 
      [{
        name : '맑음',
        icon : '',
      },
      {
        name : '맑음',
        icon : '',
      },
      {
        name : '맑음',
        icon : '',
      },
      {
        name : '맑음',
        icon : '',
      },
      {
        name : '맑음',
        icon : '',
      }
    ], 
      {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
