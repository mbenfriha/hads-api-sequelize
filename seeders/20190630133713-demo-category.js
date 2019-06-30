'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('Categories', [
            {
                name: 'Mariage',
                CreatedAt: new Date(),
                UpdatedAt: new Date()
            },
            {
                name: 'Aliments & boissons',
                CreatedAt: new Date(),
                UpdatedAt: new Date()
            }
        ], {});

    },

    down: (queryInterface, Sequelize) => {

        return queryInterface.bulkDelete('Categories', null, {});

    }
};
