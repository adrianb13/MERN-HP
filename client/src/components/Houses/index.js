import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
//import { bindActionCreators } from "redux";
//import * as actions from "../../actions/index";
import "./houses.css";

class Houses extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      house: "Hogwarts",
      housesInfo: null
    }
  };

  componentDidMount = () => {
    this.getHouse();
  };

  componentDidUpdate = (nextProps) => {
    if(this.props.house !== nextProps.house){
      this.getHouse();
    };
  };

  getHouse = () => {
    if(this.props.house){
      this.setState({
        house: this.props.house,
        housesInfo: this.props.housesInfo
      }, () => {
        this.getHouseDesign();
        console.log(this.state.house)
        console.log(this.state.housesInfo)
      });
    };
  };

  getHouseDesign = () => {
    if(this.state.house === "Gryffindor"){
      this.setState({
        room: "gryffindor"
      })
    } else if(this.state.house === "Slytherin"){
      this.setState({
        room: "slytherin"
      })
    } else if(this.state.house === "Hufflepuff"){
      this.setState({
        room: "hufflepuff"
      })
    } else if(this.state.house === "Ravenclaw"){
      this.setState({
        room: "ravenclaw",
        founder: "The house was founded by Rowena Ravenclaw.",
        traits: ""
      })
    }
  }

  enterSpells = () => {
    this.props.history.push("/spells");
  }


  render () {
    const room = "houseBack " + this.state.room;
    return (
      <div>
        <div className={room}>
          <div className="welcomeBanner">
            
            {this.state.housesInfo? (
              <div>Welcome to {this.state.housesInfo.location} </div>  
            ) : (null)}
          </div>

          <div className="houseArea">
            {this.state.housesInfo ? (
              <div className="houseCommons">
                <div className="houseInfo1">
                  <div className="houseTitle">Founder:</div> 
                  <div className="houseText">{this.state.housesInfo.founder}</div>
                  <div className="houseTitle">Head Of House:</div>
                  <div className="houseText">{this.state.housesInfo.headOfHouse}</div>
                  <div className="houseTitle">Ghost:</div>
                  <div className="houseText">{this.state.housesInfo.ghost}</div>
                </div>
                <div className="houseInfo1">
                  <div className="houseTitle">Traits:</div>
                  <div className="houseText">{this.state.housesInfo.traits}</div>
                </div>
                
              </div>
            ) : (null)}
            <div className="otherRooms">
              <div className="houseTitle">Other Rooms</div>
              <div onClick={this.enterSpells }>Enter Spells Room</div>
          </div>
          </div>
          

        </div>
      </div>
    )
  };
};

const mapStateToProps = (state, ownProps) => {
  let selectedHouse = "";
  let selectedHouseInfo = {name: "", founder: "", traits: "", headOfHouse: "", ghost: "", location: "" };
  
  if(ownProps.match.params.house){
    selectedHouse = ownProps.match.params.house;
    
    if(state.housesInfo){
      selectedHouseInfo = state.housesInfo.find(house => selectedHouse.toString().toLowerCase() === house.name.toString().toLowerCase())
    }
  }
  

  return {
    house: selectedHouse,
    housesInfo: selectedHouseInfo
  };
};

export default withRouter(connect(mapStateToProps)(Houses));