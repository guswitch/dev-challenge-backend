'use strict';
const { User } = require('../models/user');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      name: {
        type: Sequelize.STRING(128),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(128),
        allowNull: false
      },
    });
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('users');
  }
};
