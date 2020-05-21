import React from "react";
import { Link } from "react-router-dom"
import "./Home.css";

class Home extends React.Component{
  render (){
    return(
      <div>
        <div className="banner">
          <div className="mark"></div>
          <div className="bannerText">Harry Potter</div>
          <div className="glasses"></div>
        </div>
        <div className="homeBack">
          <div className="homeEnter">
            <div className="homeLink">
              <Link to="/sorting">Hop <span className="otherColor">Aboard</span> Hogwartz <span className="otherColor">Express</span>!<span className="otherColor">!</span>!</Link>
            </div>
          </div>
        </div>
      </div>
    )
  };
};

export default Home;