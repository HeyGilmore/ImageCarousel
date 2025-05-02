export default function creationOfButtons(position, iconSrc) {
  const button = document.createElement("button");
  button.classList.add("carousel-button", position);
  Object.assign(button.style, {
    position: "absolute",
    top: "50%",
    [position]: "40px",
    transform: "translateY(-50%)",
    background: "#F3DE8A",
    border: "none",
    borderRadius: "12px",
    padding: "10px",
    cursor: "pointer",
    zIndex: "10",
  });

  const icon = document.createElement("img");
  icon.src = iconSrc;
  Object.assign(icon.style, {
    width: "30px",
    height: "30px",
  });

  button.appendChild(icon);
  return button;
}
