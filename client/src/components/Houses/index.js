import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions/index";
import "./houses.css";

class Houses extends React.Component {
  constructor(props){
    super(props)
    state = {
      house: ""
    }
  }

  componentDidMount = () => {

  }


  render () {
    return (
      <div>
        <div>
          <div>
            <div>Welcome to </div>
          </div>
          <div>

          </div>
        </div>
      </div>
    )
  };
};

const mapStateToProps = (state, ownProps) => {
  let houseInfo = "";
  if(ownProps.match.params.house){
    houseInfo = ownProps.match.params.house;
  }
  return {
    house: houseInfo
  };
};

export default withRouter(connect(mapStateToProps)(Houses));