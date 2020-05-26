import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions/index";
import "./sorting.css";

import Modal from "../Modal/index";

class Sorting extends React.Component{
  state = {
    house: "Hogwarts",
    color: "black",
    background: "black",
    sorted: false,
    modal: false
  }

  componentDidMount = () => {
    if(this.state.house === "Hogwarts"){
      this.getSorted();
    }
  }

  getSorted = () => {
    let houses = [
      {"name": "Gryffindor", "color":"darkred", "background": "gryffindor"}, 
      {"name": "Slytherin", "color":"darkgreen", "background": "slytherin"},
      {"name": "Hufflepuff", "color":"goldenrod", "background": "hufflepuff"},
      {"name": "Ravenclaw", "color":"dodgerblue", "background": "ravenclaw"}];
    let chosen = Math.floor(Math.random() * 5);
    if(this.state.house === "Hogwarts"){
      let assigned = houses[chosen];
      this.setState({
        house: assigned.name,
        color: assigned.color,
        background: assigned.background
      })
      console.log(assigned);
    } else {
      let assigned = houses[0];
      this.setState({
        house: assigned.name,
        color: assigned.color,
        background: assigned.background
      })
      console.log(assigned);
    }
     
  };

  showModal = () => {
    this.setState({
      modal: !this.state.modal
    })
  };

  modalButton = () => {
    this.showModal();
    this.setState({
      sorted: true
    })
    this.props.actions.assignHouse(this.state.house);
  }

  modalBackground = () => {
    let className = "modal-main";
    if(this.state.background !== "black"){
      className += " " + this.state.background;
    }
    return className;
  }

  entrance = () => {
    this.props.history.push("/spells")
  }

  render(){
    return (
      <div className="sortBack">
        <div className="sortBanner">
          <div className="sortHeader">Sorting Hat</div>
        </div>
        <div className="sortArea">
          <div className="enterHouse">
            <div className="enter">
              {(this.state.house === "Gryffindor" && this.state.sorted) ? (<div className="white" onClick={this.entrance} >Enter</div>) : (null)}
            </div>
            <div className="enter">
              {(this.state.house === "Slytherin" && this.state.sorted)? (<div className="white" onClick={this.entrance} >Enter</div>) : (null)}
            </div>
          </div>
          <div className="sortIntro">
            <div>Time to see what House you belong to...</div>
            <div>Will it be <span style={{color: "darkred", fontWeight: "bold"}}>Gryffindor</span>, <span style={{color: "darkgreen", fontWeight: "bold"}}>Slytherin</span>, <span style={{color: "goldenrod", fontWeight: "bold"}}>Hufflepuff</span>, or <span style={{color: "dodgerblue", fontWeight: "bold"}}>Ravenclaw</span>?</div>
            {this.state.sorted ? (
              <div className="sorted sorted2">Welcome to <span style={{color: this.state.color}}>{this.state.house}</span></div>
            ) : (
              <div className="sorted" onClick={this.showModal}>Get Sorted Here</div>
            )}
          </div>
          <div className="enterHouse">
            <div className="enter">
              {(this.state.house === "Hufflepuff" && this.state.sorted) ? (<div className="white" onClick={this.entrance} >Enter</div>) : (null)}
            </div>
            <div className="enter">
              {(this.state.house === "Ravenclaw" && this.state.sorted) ? (<div className="white" onClick={this.entrance} >Enter</div>) : (null)}
            </div>
          </div>
          
        </div>
        {this.state.modal ? (
          <Modal 
          modal={this.state.modal}
          modalText={"You have been sorted to " + this.state.house + "!!!"}
          modalButton={this.modalButton}
          modalBackground={this.modalBackground}
          />
        ) : (null)}
      </div>
    )
  };
};

const mapStateToProps = state => {
  return {house: state.house}
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Sorting));