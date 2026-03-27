document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!name || !email) {
      alert("Please fill all fields!");
      e.preventDefault();
    }
  });
});