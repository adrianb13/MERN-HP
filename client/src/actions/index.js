import API from "../utils/API";
import * as types from "./types";
import houses from "../assets/data/houses.json";

//Json
export const loadHouseInfo = () => {
  return {type: types.HOUSES_INFO_SUCCESS, houses}
};

//API
export const getSorted = () => {
  return (dispatch) => {
    return API.getSorted()
    .then(res => {
      dispatch(getAPISortedSuccess(res.data))
    })
    .catch(err => console.log(err));
  };
};

const getAPISortedSuccess = (house) => {
  return {type: types.GET_SORTED_SUCCESS, house}
};

export const getAPICharacters = () => {
  return (dispatch) => {
    return API.getAPICharacters()
    .then(res => {
      dispatch(getAPICharSuccess(res.data))
    })
    .catch(err => console.log(err));
  };
};

const getAPICharSuccess = (characters) => {
  return {type: types.GET_APICHARACTERS_SUCCESS, characters}
};

export const getAPISpells = () => {
  return (dispatch) => {
    return API.getAPISpells()
    .then(res => {
      dispatch(getAPISpellSuccess(res.data))
    })
    .catch(err => console.log(err));
  };
};

const getAPISpellSuccess = (spells) => {
  return {type: types.GET_APISPELLS_SUCCESS, spells};
};

//MongoDB
//Character
export const getDBCharacters = () => {
  return (dispatch) => {
    return API.getDBCharacters()
    .then(res => {
      dispatch(getDBCharSuccess(res.data))
    })
    .catch(err => console.log(err));
  };
};

const getDBCharSuccess = (characters) => {
  return {type: types.GET_DBCHARACTERS_SUCCESS, characters}
};

export const saveCharacter = () => {
  return (dispatch) => {
    return API.saveCharacter()
    .then(res => {
      dispatch(saveCharSuccess(res.data))
    })
    .catch(err => console.log(err));
  };
};

const saveCharSuccess = (characters) => {
  return {type: types.SAVE_CHARACTER_SUCCESS, characters}
};

export const updateCharacter = () => {
  return (dispatch) => {
    return API.updateCharacter()
    .then(res => {
      dispatch(updateCharSuccess(res.data))
    })
    .catch(err => console.log(err));
  };
};

const updateCharSuccess = (characters) => {
  return {type: types.UPDATE_CHARACTER_SUCCESS, characters}
};

export const deleteCharacter = () => {
  return (dispatch) => {
    return API.deleteCharacter()
    .then(res => {
      dispatch(deleteCharSuccess(res.data))
    })
    .catch(err => console.log(err));
  };
};

const deleteCharSuccess = (characters) => {
  return {type: types.DELETE_CHARACTER_SUCCESS, characters}
};

//Spells
export const getDBSpells = () => {
  return (dispatch) => {
    return API.getDBSpells()
    .then(res => {
      dispatch(getDBSpellSuccess(res.data))
    })
    .catch(err => console.log(err));
  };
};

const getDBSpellSuccess = (spells) => {
  return {type: types.GET_DBSPELLS_SUCCESS, spells}
};

export const saveSpell = () => {
  return (dispatch) => {
    return API.saveSpell()
    .then(res => {
      dispatch(saveSpellSuccess(res.data))
    })
    .catch(err => console.log(err));
  };
};

const saveSpellSuccess = (spells) => {
  return {type: types.SAVE_SPELL_SUCCESS, spells}
};

export const updateSpell = () => {
  return (dispatch) => {
    return API.updateSpell()
    .then(res => {
      dispatch(updateSpellSuccess(res.data))
    })
    .catch(err => console.log(err));
  };
};

const updateSpellSuccess = (spells) => {
  return {type: types.UPDATE_SPELL_SUCCESS, spells}
};

export const deleteSpell = () => {
  return (dispatch) => {
    return API.deleteSpell()
    .then(res => {
      dispatch(deleteSpellSuccess(res.data))
    })
    .catch(err => console.log(err));
  };
};

const deleteSpellSuccess = (spells) => {
  return {type: types.DELETE_SPELL_SUCCESS, spells}
};

export const getHouse = () => {
  return (dispatch) => {
    dispatch(getHouseSuccess())
  };
};

const getHouseSuccess = () => {
  return {type: types.GET_HOUSE_SUCCESS}
}

export const assignHouse = (house) => {
  return (dispatch) => {
    dispatch(assignHouseSuccess(house))
  };
};

const assignHouseSuccess = (house) => {
  return {type: types.ASSIGN_HOUSE_SUCCESS, house}
};