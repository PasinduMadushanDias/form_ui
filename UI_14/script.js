document.getElementById("addCardBtn").addEventListener("click", function() {
    const cardContainer = document.getElementById("cardContainer");
    
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<h3>Card</h3><p>This is a dynamic card.</p>`;
    
    cardContainer.appendChild(card);
});
