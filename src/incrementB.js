import React, { Component } from "react";
import { render } from "react-dom";

class Increment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.countIncrement = this.countIncrement.bind(this);
  }

  grtCounter() {
    let counter = this.state.count;
    return counter === 0 ? <h3>Zero</h3> : counter;
  }

  getclassName() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  countIncrement() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <React.Fragment>
        <p className={this.getclassName()}>{this.grtCounter()}</p>
        <button onClick={this.countIncrement} className="btn btn-success m-2">
          Increment{" "}
        </button>
      </React.Fragment>
    );
  }
}

export default Increment;
