const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const spellSchema = new Schema({
  spellId: {
    type: Number,
    required: true,
    unique: true
  },
  name: { 
    type: String, 
    required: true 
  },
  type: {
    type: String,
    required: true
  },
  effect: {
    type: String,
    required: true
  }
});

const Spells = mongoose.model("Spells", spellSchema);

module.exports = Spells;