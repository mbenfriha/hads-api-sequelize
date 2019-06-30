'use strict';

const hadController = require('../controllers').had;
const categoryController = require('../controllers').category;
const categoryhadController = require('../controllers').categoryhad;

console.log(hadController)

module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        messsage : 'welcome to the had api',
    }));

    /* had */
    app.post('/api/had', hadController.create);
    app.delete('/api/had/:had_id', hadController.delete);
    app.put('/api/had/:had_id', hadController.update);
    app.get('/api/had', hadController.list);

    /* category */
    app.get('/api/category', categoryController.list);
    app.post('/api/addCategory', categoryhadController.create);
    app.delete('/api/deleteCategory/:had_id/:category_id', categoryhadController.delete);
    app.post('/api/category', categoryController.create);

};
