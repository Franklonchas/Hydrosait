const db = require("../models");
const mongoose = require("mongoose");
const river = db.rivers;


exports.create = (req, res) => {

    if (!req.body.name) {
        res.status(400).send({message: "Content can not be empty!"});
        return;
    }

    const River = mongoose.model("river");
    const river = new River({
        name: req.body.name,
        country: req.body.country,
        length: req.body.length
    });

    river
        .save(river)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the river."
            });
        });
};

exports.findAll = (req, res) => {
    const name = req.query.name;
    const condition = name ? {name: {$regex: new RegExp(name), $options: "i"}} : {};

    river.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving rivers."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    river.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({message: "Not found river with id " + id});
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({message: "Error retrieving river with id=" + id});
        });
};

exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    river.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update river with id=${id}. Maybe river was not found!`
                });
            } else res.send({message: "river was updated successfully."});
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating river with id=" + id
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    river.findByIdAndRemove(id, {useFindAndModify: false})
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete river with id=${id}. Maybe river was not found!`
                });
            } else {
                res.send({
                    message: "river was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete river with id=" + id
            });
        });
};