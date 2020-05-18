const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const spellSchema = new Schema({
  spellId: {
    type: String,
    required: true,
    unique: true
  },
  name: { 
    type: String, 
    required: true 
  }
});

const Spells = mongoose.model("Spells", spellSchema);

module.exports = Spells;