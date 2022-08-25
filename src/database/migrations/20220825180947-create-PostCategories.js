'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PostCategories', {
      
      postId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey:true,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: {
          model:"BlogPosts",
          key: "id",
        }
      },

      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey:true,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: {
          model:"Categories",
          key: "id",
        }
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('PostCategories');
  },
};
