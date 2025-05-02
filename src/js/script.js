// Import statements (unchanged)
import "../css/reset.css";
import "../css/styles.css";
import creationOfBookCards from "./cards.js";
import creationOfButtons from "./buttons.js";
import data from "../data/books.json";
import left from "../img/left.svg";
import right from "../img/right.svg";

// DOM Setup
const mainSection = document.getElementById("mainSection");
Object.assign(mainSection.style, {
  display: "flex",
  backgroundColor: "#272838",
  position: "relative",
  padding: "40px 80px",
  marginTop: "5em",
  overflow: "hidden", // Ensure main section hides overflow
});

// Carousel Track Setup
const carouselTrack = document.createElement("div");
carouselTrack.classList.add("carousel-track");
Object.assign(carouselTrack.style, {
  width: "100%", // Full width of the container
  display: "flex",
  gap: "2em",
  transition: "transform 0.5s ease",
});

// Create cards and add them to the carousel
const cards = creationOfBookCards(data);
cards.forEach((card) => carouselTrack.appendChild(card));
mainSection.appendChild(carouselTrack);

//---------- Creation of Button
const leftButton = creationOfButtons("left", left);
const rightButton = creationOfButtons("right", right);
mainSection.appendChild(leftButton);
mainSection.appendChild(rightButton);

// Track and Items
const items = Array.from(carouselTrack.children);
let currentIndex = 0;

// Button Logic
[leftButton, rightButton].forEach((button) => {
  button.addEventListener("click", () => {
    const direction = button.classList.contains("left") ? -1 : 1;
    currentIndex += direction;

    // Wrap-around logic
    if (currentIndex < 0) currentIndex = items.length - 1;
    if (currentIndex >= items.length) currentIndex = 0;

    // Update track transform
    const itemWidth =
      items[0].offsetWidth +
      parseFloat(getComputedStyle(items[0]).marginRight || 0);
    carouselTrack.style.transform = `translateX(${
      -currentIndex * itemWidth
    }px)`;
  });
});
