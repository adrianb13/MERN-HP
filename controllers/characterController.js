const db = require("../models");

// Defining methods for the characterController
module.exports = {
  findAll: function(req, res) {
    db.Characters
      .find({})
      //.sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Characters
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Characters
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }, 
  remove: function(req, res) {
    db.Characters
      .remove({_id: req.params.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
/*   findById: function(req, res) {
    db.Characters
      .findById({_id: req.params._id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  } */
};