import React from "react";

function Button(props) {
  let text = props.text;

  const handleClick = (parentFunc) => {
    return parentFunc;
  };

  return (
    <button
      style={props.style}
      onClick={handleClick(props.parentCallBack)}
      className={props.buttonForWhat}
    >
      {text}
    </button>
  );
}

export default Button;
