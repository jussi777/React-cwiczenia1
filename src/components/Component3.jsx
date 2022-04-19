import React from "react";
import MathButton from "./MathButton";

export default class Component3 extends React.Component {
  state = {
    count: 0,
    result: 0,
  };

  handleMathClick = (type, number) => {
    if (type === "substraction") {
      this.setState((prevState) => ({
        count: prevState.count + 1,
        result: prevState.result - number,
      }));
    } else if (type === "reset") {
      this.setState((prevState) => ({
        count: number,
        result: number,
      }));
    } else if (type === "addition") {
      this.setState((prevState) => ({
        count: prevState.count + 1,
        result: prevState.result + number,
      }));
    }
  };

  render() {
    return (
      <>
        <MathButton
          name="-10"
          number="10"
          type="substraction"
          click={this.handleMathClick}
        />
        <button onClick={this.handleMathClick.bind(this, "substraction", 1)}>
          -1
        </button>
        <button onClick={this.handleMathClick.bind(this, "reset", 0)}>
          Reset
        </button>
        <button onClick={this.handleMathClick.bind(this, "addition", 1)}>
          +1
        </button>
        <MathButton
          name="+10"
          number="10"
          type="addition"
          click={this.handleMathClick}
        />
        <h1>Liczba kliknięć: {this.state.count} </h1>
        <h1>Wynik: {this.state.result}</h1>
      </>
    );
  }
}
