'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('sessions', {
      token: {
        type: Sequelize.STRING(128),
        allowNull: false
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {         // User belongsTo Company 1:1
          model: 'User',
          key: 'id'
        }
      }
    });

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('sessions');

  }
};
