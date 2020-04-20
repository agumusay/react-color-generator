import React, { useState } from "react";
import randomHexGenerator from "./utils/randomHexGenerator";
import ColorGenerator from "./components/colorGenerator/colorGenerator";
import ColorItem from "./components/colorItem/colorItem";
import Footer from "./components/footer/footer";
import Button from "./components/button/button";
import PinkBird from "./assets/images/pink-bird.svg";
import "./App.scss";
import "./scss/reset.scss";

const addButtonStyles = {
  backgroundColor: "steelblue",
  width: "30%",
  height: "60%",
  color: "white",
  fontWeight: "bold",
  fontSize: "1.2rem",
  borderRadius: "5px",
};

const removeButtonStyles = {
  backgroundColor: "tomato",
  padding: "5px",
  color: "white",
  borderRadius: "3px",
};

function App() {
  const [colorsArray, setColorsArray] = useState([]);

  const addColor = () => {
    setColorsArray([randomHexGenerator(), ...colorsArray]);
  };

  const removeColor = (targetColor) => {
    let updatedColors = colorsArray.filter((hexColor) => {
      return hexColor !== targetColor;
    });

    setColorsArray(updatedColors);
  };

  return (
    <div className="App">
      {colorsArray.length === 0 ? (
        <div className="no-color">
          <img src={PinkBird} alt="" className="no-color-bird" />
          <p className="no-color-text">There are no colors yet.</p>
        </div>
      ) : (
        <ColorGenerator>
          {colorsArray.map((hexColor, index) => {
            return (
              <ColorItem color={hexColor} key={index}>
                <Button
                  style={removeButtonStyles}
                  text="remove"
                  buttonForWhat="remove"
                  parentCallBack={() => removeColor(hexColor)}
                />
              </ColorItem>
            );
          })}
        </ColorGenerator>
      )}

      <Footer>
        <Button
          style={addButtonStyles}
          text="Create color"
          buttonForWhat="add"
          parentCallBack={() => addColor()}
        />
      </Footer>
    </div>
  );
}

export default App;
