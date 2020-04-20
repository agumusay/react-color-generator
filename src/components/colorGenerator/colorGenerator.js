import React from "react";
import "./color-generator.scss";

function ColorGenerator(props) {
  return <ul className="container">{props.children}</ul>;
}

export default ColorGenerator;
