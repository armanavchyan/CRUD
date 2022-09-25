'use strict';
async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('Posts', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    user_id: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      references: {model: "users", key: "id"},
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    imgName:  {
      type: Sequelize.STRING,
      allowNull: false,
    },
    descript: {
      type: Sequelize.TEXT,
      allowNull: true,
    },

    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  })
}

async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('Posts');
}
module.exports = {
  up,
  down
}