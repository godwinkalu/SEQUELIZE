'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('playerstarts', 'playerId', {
      type: Sequelize.UUID,
      allowNull: true, 
      references:{model:"footballdbs", key:"Id"}// Adjust as needed
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('playerstarts', 'playerId');
  },
};