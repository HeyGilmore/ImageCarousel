export default function creationOfBookCards(data) {
  return data.map((book) => {
    const card = document.createElement("div");
    // Style the card
    Object.assign(card.style, {
      flexShrink: "0",
      width: "420px",
      height: "280px",
      backgroundColor: "#F9F8F8",
      borderRadius: "15px",
      //   //   border: "1px solid #7E7F9A",
      display: "flex",
      flexDirection: "row",
      position: "relative",
      //   //   margin: "0 10px",
    });

    // Left Section
    const leftSection = document.createElement("section");
    Object.assign(leftSection.style, {
      width: "40%",
      height: "100%",
      overflow: "hidden",
    });

    const bookCover = document.createElement("img");
    bookCover.src = book.image || "https://via.placeholder.com/150"; // Fallback image
    Object.assign(bookCover.style, {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "15px 0 0 15px",
    });
    leftSection.appendChild(bookCover);
    card.appendChild(leftSection);

    // Right Section
    const rightSection = document.createElement("section");
    Object.assign(rightSection.style, {
      width: "60%",
      height: "100%",
      overflowY: "scroll",
      padding: "12px",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    });

    const title = document.createElement("h2");
    title.textContent = book.title;
    rightSection.appendChild(title);

    const author = document.createElement("span");
    author.innerHTML = `<strong>by:</strong> ${book.author}`;
    rightSection.appendChild(author);

    const genre = document.createElement("span");
    genre.innerHTML = `<strong>Genre:</strong> ${book.genre}`;
    rightSection.appendChild(genre);

    const year = document.createElement("span");
    year.innerHTML = `<strong>Published:</strong> ${book.publicationYear}`;
    rightSection.appendChild(year);

    const summary = document.createElement("p");
    summary.textContent = book.summary;
    Object.assign(summary.style, {
      fontSize: "0.9rem",
      lineHeight: "1.4",
    });
    rightSection.appendChild(summary);

    const rating = document.createElement("h3");
    rating.textContent = book.rating;
    Object.assign(rating.style, {
      position: "absolute",
      top: "-12px",
      left: "-10px",
      backgroundColor: "#F3DE8A",
      zIndex: "10",
      padding: "3px 12px",
      borderRadius: "6px",
    });
    card.appendChild(rating);
    card.appendChild(rightSection);

    return card;
  });
}
