import "../css/reset.css";
import "../css/styles.css";
import card from "./cards.js";

//-- Calling DOM
const mainSection = document.getElementById("mainSection");
// Style
Object.assign(mainSection.style, {
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

//-- Creation of new Div
const newDiv = document.createElement("div");
// Style
Object.assign(newDiv.style, {
  width: "80%",
  height: "445px",
  backgroundColor: "#272838",
  overflow: "scroll",
  display: "flex",
  justifyContent: "Center",
  flexDirection: "Column",
  padding: "0 10px",
});

// Adding Cards
newDiv.appendChild(card());

//-- Add new Div to DOM
mainSection.appendChild(newDiv);
