import React from "react";
import MathButton from "./MathButton";
import ResultPanel from "./ResultPanel";

export default class Component3 extends React.Component {
  state = {
    count: 0,
    result: 0,
  };

  handleMathClick = (type, number) => {
    if (type === "subtraction") {
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
          type="subtraction"
          click={this.handleMathClick}
        />
        <MathButton
          name="-1"
          number="1"
          type="subtraction"
          click={this.handleMathClick}
        />
        <MathButton
          name="Reset"
          number="0"
          type="reset"
          click={this.handleMathClick}
        />
        <MathButton
          name="+1"
          number="1"
          type="addition"
          click={this.handleMathClick}
        />
        <MathButton
          name="+10"
          number="10"
          type="addition"
          click={this.handleMathClick}
        />
        <ResultPanel count={this.state.count} result={this.state.result} />
      </>
    );
  }
}
