const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll("#navLinks a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

document.querySelectorAll(".order-btn").forEach(button => {
  button.addEventListener("click", () => {
    const name = button.dataset.name;
    const price = button.dataset.price;
    const message = `नमस्ते Online Paithani by Sandip, मुझे ${name} साड़ी पसंद है। कीमत ${price} है। कृपया उपलब्धता और डिलीवरी की जानकारी दें।`;
    window.open(`https://wa.me/919970675089?text=${encodeURIComponent(message)}`, "_blank");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
