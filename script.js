const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", open);
  });
  document
    .querySelectorAll(".nav a")
    .forEach((a) =>
      a.addEventListener("click", () => nav.classList.remove("open"))
    );
}
const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".product-card");
filters.forEach((btn) =>
  btn.addEventListener("click", () => {
    filters.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.dataset.filter;
    cards.forEach((card) => {
      card.style.display =
        filter === "all" || card.dataset.category === filter ? "block" : "none";
    });
  })
);
const form = document.getElementById("quoteForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const d = new FormData(form);
  const text = `Hello Glimpaxe Momento, I'd like to request a custom quote.%0A%0AName: ${encodeURIComponent(
    d.get("name")
  )}%0AWhatsApp: ${encodeURIComponent(
    d.get("phone")
  )}%0AEvent: ${encodeURIComponent(
    d.get("event")
  )}%0AEvent date: ${encodeURIComponent(
    d.get("date") || "Not specified"
  )}%0AQuantity: ${encodeURIComponent(
    d.get("quantity") || "Not specified"
  )}%0ABudget/package preference: ${encodeURIComponent(
    d.get("budget") || "Not specified"
  )}%0ARequirements: ${encodeURIComponent(
    d.get("message") || "Not specified"
  )}`;
  window.open(`https://wa.me/2348135200799?text=${text}`, "_blank");
});
