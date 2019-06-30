'use strict';
const CategoryHad = require('../models').CategoryHad;
const Category = require('../models').Category;
const Had = require('../models').Had;

module.exports = {
    create: (req, res) => {
        return CategoryHad
            .create({
                category_id: req.body.category_id,
                had_id: req.body.had_id,
            })
            .then (had => res.status(201).json({message: "created"}))
            .then (error => res.status(400).send(error))
    },
    delete: (req, res) => {
        return CategoryHad
            .destroy({
                where: {
                    category_id: req.params.category_id,
                    had_id: req.params.had_id
                }
            })
            .then (had => res.status(201).json({message: "deleted"}))
            .then (error => res.status(400).send(error))
    }
};