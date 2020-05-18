const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const characterSchema = new Schema({
  characterId: {
    type: String,
    required: true,
    unique: true
  },
  name: { 
    type: String, 
    required: true 
  },
  alias: { 
    type: String, 
    required: false 
  },
  house: { 
    type: Array, 
    required: true 
  },
  bloodStatus: { 
    type: String, 
    required: true
  },
  patronus: {
    type: String,
    required: false
  },
  wand: {
    type: String,
    required: false
  },
  role: { 
    type: String, 
    required: false 
  },
});

const Characters = mongoose.model("Characters", characterSchema);

module.exports = Characters;