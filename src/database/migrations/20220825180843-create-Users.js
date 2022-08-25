'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      displayName: {
        type: Sequelize.STRING,
      },

      email: {
        type: Sequelize.STRING,
      },

      password: {
        type: Sequelize.STRING,
      },

      image: {
        type: Sequelize.STRING,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Users');
  },
};
