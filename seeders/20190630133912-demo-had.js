'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('Hads', [
            {
                title: 'Se marier jeune',
                classification_id: 1,
                text: "fjref frmezioj fmzreioj",
                arabe: " رسول ",
                CreatedAt: new Date(),
                UpdatedAt: new Date()
            },
        ], {});

    },

    down: (queryInterface, Sequelize) => {

        return queryInterface.bulkDelete('Hads', null, {});

    }
};
