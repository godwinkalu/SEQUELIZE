'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('playerstarts', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        default:Sequelize.UUID
      },
      Goals: {
        type: Sequelize.STRING
      },
      Assist: {
        type: Sequelize.STRING
      },
      Redcard: {
        type: Sequelize.INTEGER
      },
      Yellowcard: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('playerstarts');
  }
};