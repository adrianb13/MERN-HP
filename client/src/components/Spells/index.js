import React from "react";
import API from "../../utils/API";

class Spells extends React.Component {
  state = {
    spells: [],
    spellsPresent: false
  }

  componentDidMount = () => {
    this.getSpellsList();
  }

  getSpellsList = () => {
    API.getAPISpells()
    .then(res => {
      this.setState({
        spells: res.data,
        spellsPresent: true
      }, () => console.log(this.state.spells))
    });
  }

  render (){
    return (
      <div className="App">
        <header className="App-header">
          {this.state.spellsPresent ? (
            <div>
              <div>SPELLS</div>
              {this.state.spells.map(spell => (
                <div key={spell.item}>
                  <div>Name: {spell.spell}</div>
                  <div>Type: {spell.type}</div>
                  <div>Effect: {spell.effect}</div>
                </div>
              ))}
            </div>
          ) : (
            <div>Spells Are Currently Forbidden By The Ministry Of Magic!!!</div>
          )}
        </header>
      </div>
    );
  };
}

export default Spells;