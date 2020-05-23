import * as types from "../actions/types";

const initialState = {
  apiCharacters: [],
  apiSpells: [],
  dbCharacters: [],
  dbSpells: [],
  house: "Hogwarts"
};

const rootReducer = (state = initialState, action) => {
  switch(action.type){
    case types.GET_APICHARACTERS_SUCCESS:
      return Object.assign({}, state, {
        apiCharacters: state.apiCharacters.concat(action.characters)
      });
    case types.GET_APISPELLS_SUCCESS:
      return Object.assign({}, state, {
        apiSpells: state.apiSpells.concat(action.spells)
      });

    //DB Character List Changes
    case types.GET_DBCHARACTERS_SUCCESS:
      return Object.assign({}, state, {
        dbCharacters: state.dbCharacters.concat(action.characters)
      });
    case types.SAVE_CHARACTER_SUCCESS:
      //Add New character to current list
      return Object.assign({}, state, {
        dbCharacters: state.dbCharacters.concat(action.characters)
      });
    case types.UPDATE_CHARACTER_SUCCESS:
      //Assign current character list
      const currChar = Object.assign([], state.dbCharacters);
      //Find character to be updated
      const newChar = currChar.filter(character => character.id === action.characters.id);
      //Get Index of character updated
      const indexChar = currChar.indexOf(newChar[0]);
      //Splice old info with new info for updated Character
      currChar.splice(indexChar, 1, action.characters);
      //Return update character list
      return Object.assign({}, state, {
        dbCharacters: currChar
      });
    case types.DELETE_CHARACTER_SUCCESS:
      const currChar1 = Object.assign([], state.dbCharacters);
      const delChar = currChar1.filter(character => {
        return parseInt(character.id) === parseInt(action.characters.id)
      });
      const indexChar1 = currChar1.indexOf(delChar[0]);
      currChar1.splice(indexChar1, 1);
      return Object.assign({}, state, {
        dbCharacters: currChar1
      });

    //DB Spell List Changes
    case types.GET_DBSPELLS_SUCCESS:
      return Object.assign({}, state, {
        dbSpells: state.dbSpells.concat(action.spells)
      })
    case types.SAVE_SPELL_SUCCESS:
      return Object.assign({}, state, {
        dbSpells: state.dbSpells.concat(action.spells)
      });
    case types.UPDATE_SPELL_SUCCESS:
      const currSpells = Object.assign([], state.dbSpells);
      const newSpell = currSpells.filter(spell => spell.id === action.spells.id);
      const indexSpell = currSpells.indexOf(newSpell[0]);
      currSpells.splice(indexSpell, 1, action.spells);
      return Object.assign({}, state, {
        dbSpells: currSpells
      });
    case types.DELETE_SPELL_SUCCESS:
      const currSpells1 = Object.assign([], state.dbSpells);
      const delSpell = currSpells1.filter(spell => {
        return parseInt(spell.id) === parseInt(action.spells.id)
      });
      const indexSpell1 = currSpells1.indexOf(delSpell[0]);
      currSpells1.splice(indexSpell1, 1);
      return Object.assign({}, state, {
        dbSpells: currSpells1
      });
    case types.GET_HOUSE_SUCCESS:
      return { house: state.house }
    case types.ASSIGN_HOUSE_SUCCESS:
      return {house: action.house}
    default: 
      return state;
  }
};

export default rootReducer;