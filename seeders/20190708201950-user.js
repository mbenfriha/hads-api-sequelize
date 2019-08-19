'use strict';
const bcrypt = require('bcrypt');

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('Users', [{
            name: 'elhoda',
            password: bcrypt.hashSync('Minibblove', 10),
            CreatedAt: new Date(),
            UpdatedAt: new Date()
        }], {});

    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkDelete('People', null, {});
        */
    }
};
