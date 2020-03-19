// Rainbow.js
import React from "react";

const Rainbow = Wrappedcomponent => {
  const colors = ["red", "pink", "orange", "blue", "green", "yellow"];
  const randomColor = colors[Math.floor(Math.random() *5)];
  const className = randomColor + "-text";

  return props => {
    return (
      <div className={className}>
        <Wrappedcomponent {...props} />
      </div>
    );
  };
};

export default Rainbow;
