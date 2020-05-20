import axios from "axios";

const base = "https://www.potterapi.com/v1/";
const apikey2 = process.env.REACT_APP_HP_KEY2;

export default {
  //HP API
  getSorted: () => {
    return axios.get(base + "sortingHat");
  },
  getAPISpells: () => {
    return axios.get(base + "spells?key=$2a$10$nDXGprxXElHR/" + apikey2);
  },
  getAPICharacters: () => {
    return axios.get(base + "characters?key=$2a$10$nDXGprxXElHR/" + apikey2);
  },

  //MongoDB
  //Characters
  getDBCharacters: () => {
    return axios.get("/api/characters");
  },
  saveCharacter: (character) => {
    return axios.post("/api/characters" + character);
  },
  updateCharacter: (character) => {
    return axios.put("/api/characters/" + character.id, character)
  },
  deleteCharacter: (charId) => {
    return axios.delete("/api/characters" + charId);
  },

  //Spells
  getDBSpells: () => {
    return axios.get("api/spells");
  },
  saveSpell: (spell) => {
    return axios.post("/api/spells", spell);
  },
  updateSpell: (spell) => {
    return axios.post("/api/spells/" + spell.id, spell);
  },
  deleteSpell: (spellId) => {
    return axios.delete("/api/spells" + spellId);
  }
};