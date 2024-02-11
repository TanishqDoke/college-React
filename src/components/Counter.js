import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    // Initialize state variable count with an initial value of 0
    this.state = {
      count: 0,
    };
  }

  // Method to increment count and update the state
  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div>
        {/* Display the current count value */}
        <p>Count: {this.state.count}</p>
        {/* Button to increment count */}
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default Counter;
