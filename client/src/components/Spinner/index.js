import React from "react";
import "./spinner.css";

const Spinner = () => {
  return (
    <div>
      <div className="spinBox">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
        <div className="line4"></div>
      </div>
      <div className="spinBox2">
        <div className="line5"></div>
        <div className="line6"></div>
        <div className="line7"></div>
        <div className="line8"></div>
      </div>
      
    </div>
  )
}

export default Spinner;