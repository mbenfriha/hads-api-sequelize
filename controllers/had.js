'use strict';
const Had = require('../models').Had;
const Category = require('../models').Category;


module.exports = {
    create: (req, res) => {
        return Had
            .create({
                title: req.body.title,
                classification_id: 1,
                text: req.body.text,
                arabe: req.body.arabe,
            })
            .then (had => {
                res.status(201).json(had)
            })
            .then (error => res.status(400). send(error))
    },
    delete: (req, res) => {
        const hadId = req.params.had_id;
        return Had
            .destroy({
                where: {
                    id: hadId
                }
            })
            .then (had => res.status(201).json({message: "deleted"}))
            .then (error => res.status(400). send(error))
    },
    list: (req, res) => {
        return Had
            .findAll({
                include: [{
                    model: Category,
                    as: 'categories'
                }],
            })
            .then (had => res.status(201).send(had))
            .then (error => res.status(400).send(error))
    },
    update: (req, res) => {
        const hadId = req.params.had_id;
        console.log(req.body);
        return Had
            .update(req.body, { where: { id: hadId } })
            .then (had => res.status(201).send(had))
            .then (error => res.status(400).send(error))
    }
};