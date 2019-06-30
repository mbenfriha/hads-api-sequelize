'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('CategoryHads', [{
            category_id: 1,
            had_id: 1,
            CreatedAt: new Date(),
            UpdatedAt: new Date()
        }], {});

    },

    down: (queryInterface, Sequelize) => {

        return queryInterface.bulkDelete('CategoryHads', null, {});

    }
};
