import React from "react";

const MathButton = (props) => {
    const number = parseInt(props.number)
  return (
    <button onClick={() => props.click(props.type, number)}>
      {props.name}
    </button>
  );
};

export default MathButton;
