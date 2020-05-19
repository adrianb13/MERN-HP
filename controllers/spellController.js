const db = require("../models");

// Defining methods for the spellController
module.exports = {
  findAll: function(req, res) {
    db.Spells
      .find({})
      //.sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Spells
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Spells
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }, 
  remove: function(req, res) {
    db.Spells
      .remove({_id: req.params.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
/*   findById: function(req, res) {
    db.Spells
      .findById({_id: req.params._id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  } */
};