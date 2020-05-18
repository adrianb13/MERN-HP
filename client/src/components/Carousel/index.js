import React from "react";
import "./carousel.css";

const colors = [ "black", "blue", "red", "green", "yellow", "orange", "purple", "pink"]

class Carousel extends React.Component {
  state = {
    numbers: [0, 1, 2, 3, 4, 5, 6, 7],
    index: 0,
    index1: 1,
    index2: 2,
    index3: 3,
    index4: 4
  }

  componentDidMount = () => {
    this.interval();
  }

  componentWillUnmount = () => {
    this.interval();
  }

  interval = () => {
    setInterval(this.insert, 5000)
  }

  insert = () => {
    console.log(this.state.index)
    if (this.state.index !== this.state.numbers.length -1) {
      this.setState({
        index: this.state.index + 1
      })
    } else if (this.state.index === this.state.numbers.length - 1) {
      this.setState({
        index: 0
      })
    }
    
    if (this.state.index1 !== this.state.numbers.length -1) {
      this.setState({
        index1: this.state.index1 + 1
      })
    } else if (this.state.index1 === this.state.numbers.length - 1) {
      this.setState({
        index1: 0
      })
    }

    if (this.state.index2 !== this.state.numbers.length -1) {
      this.setState({
        index2: this.state.index2 + 1
      })
    } else if (this.state.index2 === this.state.numbers.length - 1) {
      this.setState({
        index2: 0
      })
    }

    if (this.state.index3 !== this.state.numbers.length -1) {
      this.setState({
        index3: this.state.index3 + 1
      })
    } else if (this.state.index3 === this.state.numbers.length - 1) {
      this.setState({
        index3: 0
      })
    }

    if (this.state.index4 !== this.state.numbers.length -1) {
      this.setState({
        index4: this.state.index4 + 1
      })
    } else if (this.state.index4 === this.state.numbers.length - 1) {
      this.setState({
        index4: 0
      })
    }  
  }
  
  render () {
    return (
      <div className="back">
        <div className="container">
          
            <div className="slideBox" style={{background: colors[this.state.index]  }}>
              <div className="slide">{this.state.index}</div>
            </div>
            <div className="slideBox" style={{background: colors[this.state.index1] }}>
              <div className="slide">{this.state.index1}</div>
            </div>
            <div className="slideBox" style={{background: colors[this.state.index2] }}>
              <div className="slide">{this.state.index2}</div>
            </div>
            <div className="slideBox" style={{background: colors[this.state.index3] }}>
              <div className="slide">{this.state.index3}</div>
            </div>
            <div className="slideBox" style={{background: colors[this.state.index4] }}>
              <div className="slide">{this.state.index4}</div>
            </div>
          
        </div>
      </div>
    )
  }
}

export default Carousel;