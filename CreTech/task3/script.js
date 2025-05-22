document.getElementById("cardForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;
  const occasion = document.getElementById("occasion").value;

  document.getElementById("cardName").textContent = "- " + name;
  document.getElementById("cardMessage").textContent = message;
  document.getElementById("cardOccasion").textContent = "Happy " + occasion + "!";

  const card = document.getElementById("cardOutput");
  card.style.display = "block";
});

document.getElementById("downloadBtn").addEventListener("click", function() {
  const card = document.getElementById("cardOutput");
  html2canvas(card).then(canvas => {
    const link = document.createElement("a");
    link.download = "greeting_card.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
});