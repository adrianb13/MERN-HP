import React from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import "./Sorting.css";

class Sorting extends React.Component{
  state = {
    house: ""
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
              {this.state.house == "gryffindor" ? (<Link >Enter</Link>) : (null)}
            </div>
            <div className="enter">
              {this.state.house == "slytherin" ? (<Link >Enter</Link>) : (null)}
            </div>
          </div>
          <div className="sortIntro">
            <div>Time to see what House you belong to...</div>
            <div>Will it be <span style={{color: "darkred", fontWeight: "bold"}}>Gryffindor</span>, <span style={{color: "darkgreen", fontWeight: "bold"}}>Slytherin</span>, <span style={{color: "goldenrod", fontWeight: "bold"}}>Hufflepuff</span>, or <span style={{color: "dodgerblue", fontWeight: "bold"}}>Ravenclaw</span>?</div>
            <div className="sorted">Get Sorted Here</div>
          </div>
          <div className="enterHouse">
            <div className="enter">
              {this.state.house == "hufflepuff" ? (<Link >Enter</Link>) : (null)}
            </div>
            <div className="enter">
              {this.state.house == "ravenclaw" ? (<Link >Enter</Link>) : (null)}
            </div>
          </div>
          
        </div>
      </div>
    )
  };
};

export default Sorting;