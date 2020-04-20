import React from "react";

import "./color-item.scss";

function ColorItem(props) {
  let colorStyle = {
    backgroundColor: props.color,
  };
  return (
    <li className="color">
      <div className="color-item" style={colorStyle}></div>
      <p className="color-value">{props.color}</p>
      {props.children}
    </li>
  );
}

export default ColorItem;
