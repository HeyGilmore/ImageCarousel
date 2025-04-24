
export default function creationOfBookCards(){

    const card = document.createElement("div");
    // Style
    Object.assign(card.style, {
        width: "420px",
        height: "300px",
        backgroundColor: "#F3DE8A",
    });

    return card;
}