import React, { Component } from "react";

export default class Numbers extends Component {
  state = { numbers: [1, 31, 4, 57, 12, 94, 38, 63, 44, 87] };
  render() {
    const even = () => {
       
        console.log("click again");
      
    };
    const elements = this.state.numbers.map((number, index) => (
      <button onClick={even} key={index}>
        {number}
      </button>
    ));
    return <div>{elements}</div>;
  }
}
