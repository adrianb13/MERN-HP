import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions/index";
import "./spells.css";


class Spells extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      spells: [],
      spellsPresent: false,
      none: false
    }
  };

  componentDidMount = () => {
    this.getSpellsList();
  };

  componentDidUpdate = (nextProps) => {
    if(this.props.apiSpells !== nextProps.apiSpells){
      this.getSpellsList();
    }
  }

  getSpellsList = () => {
    console.log("getting")
    if(this.props.apiSpells){
      this.setState({
        spells: this.props.apiSpells,
        spellsPresent: true
      }, () => {console.log(this.state.spells)})
    } 
  };

  render (){
    return (
      <div className="spellPage">
        <div className="spellHeader">
          <div className="spellWord"></div>
          <div className="spellWord2"></div>
          <div>~ SPELLS ~</div>
        </div>
        {this.state.spellsPresent ? (
          <div className="spellArea">
            {this.state.spells.map(spell => (
              <div className="spellBox" key={spell._id}>
                <div className="spiral"></div>
                <div className="spellCard">
                  <div>Name: {spell.spell}</div>
                  <div>Type: {spell.type}</div>
                  <div>Effect: {spell.effect}</div>  
                </div>
                
              </div>
            ))}
          </div>
        ) : (
          <div className="spellArea">Spells Are Currently Forbidden By The Ministry Of Magic!!!</div>
        )}
      </div>
    );
  };
};

const mapStateToProps = state => {
  return {
    apiSpells: state.apiSpells
  }
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Spells));