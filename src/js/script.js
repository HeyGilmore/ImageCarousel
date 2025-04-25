import "../css/reset.css";
import "../css/styles.css";
import creationOfBookCards from "./cards.js";
import data from "../data/books.json";
import buttons from "./buttons.js";
import left from "../img/left.svg";
import right from "../img/right.svg";

//-- Calling DOM
const mainSection = document.getElementById("mainSection");
// Style
Object.assign(mainSection.style, {
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
});

//-- Creation of new Div
const newDiv = document.createElement("div");
// Add class
newDiv.classList.add("carousel-track");
// style
Object.assign(newDiv.style, {
  width: "95%",
  padding: "40px 80px",
  backgroundColor: "#272838",
  overflowX: "scroll",
  display: "flex",
  gap: "2em",
});

// Create cards and add them to newDiv
const cards = creationOfBookCards(data);
cards.forEach((card) => newDiv.appendChild(card));

// Add new Div to DOM
mainSection.appendChild(newDiv);

//----- Left button
const leftButton = document.createElement("button");
// Add class
leftButton.classList.add("carousel-button", "left");
Object.assign(leftButton.style, {
  position: "absolute",
  top: "75%",
  left: "40px", // Adjust as needed
  transform: "translateY(-50%)",
  border: "none",
  padding: "0",
  cursor: "pointer",
  zIndex: "10",
  height: "auto",
  background: "#F3DE8A",
  borderRadius: "12px",
  padding: "5px",
});
// Add Left Image
const leftArrow = document.createElement("img");
leftArrow.src = left; // Ensure this points to the correct image source
Object.assign(leftArrow.style, {
  height: "80px", // Match button height
  width: "80px",
  display: "block", // Remove extra spacing
});

// Append the image to the button
leftButton.appendChild(leftArrow);

// Append the button to the parent container
newDiv.appendChild(leftButton);

//----- right button
const rightButton = document.createElement("button");
// Add class
rightButton.classList.add("carousel-button", "left");
Object.assign(rightButton.style, {
  position: "absolute",
  top: "75%",
  right: "40px", // Adjust as needed
  transform: "translateY(-50%)",
  border: "none",
  padding: "0",
  cursor: "pointer",
  zIndex: "10",
  height: "auto",
  background: "#F3DE8A",
  borderRadius: "12px",
  padding: "5px",
});
// Add Left Image
const rightArrow = document.createElement("img");
rightArrow.src = right; // Ensure this points to the correct image source
Object.assign(rightArrow.style, {
  height: "80px", // Match button height
  width: "80px",
  display: "block", // Remove extra spacing
});

// Append the image to the button
rightButton.appendChild(rightArrow);

// Append the button to the parent container
newDiv.appendChild(rightButton);
