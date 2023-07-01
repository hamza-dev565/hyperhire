"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const books = [];
    const now = new Date();

    for (let i = 1; i <= 100; i++) {
      books.push({
        title: `Book ${i}`,
        description: `Description ${i}`,
        discountRate: Math.random(),
        image: "https://via.placeholder.com/300",
        price: Math.floor(Math.random() * 50) + 10,
        createdAt: now,
        updatedAt: now,
      });
    }

    await queryInterface.bulkInsert("Books", books, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Books", null, {});
  },
};
