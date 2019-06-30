'use strict';
const Category = require('../models').Category;
const CategoryHad = require('../models').CategoryHad;

module.exports = {
    create: (req, res) => {
        return Category
            .create({
                name: req.body.name,
            })
            .then (had => res.status(201). send(had))
            .then (error => res.status(400). send(error))
    },
    list: (req, res) => {
        return Category
            .findAll()
            .then (had => res.status(201). send(had))
            .then (error => res.status(400). send(error))
    }
};