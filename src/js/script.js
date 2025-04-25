import "../css/reset.css";
import "../css/styles.css";
import creationOfBookCards from "./cards.js";
import data from "../data/books.json";

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
Object.assign(newDiv.style, {
  width: "95%",
  padding: "35px",
  backgroundColor: "#272838",
  overflowX: "scroll",
  display: "flex",
  gap: "2em",
});

// Generate cards and append them directly
const cards = creationOfBookCards(data);
cards.forEach((card) => newDiv.appendChild(card));

// Add new Div to DOM
mainSection.appendChild(newDiv);
