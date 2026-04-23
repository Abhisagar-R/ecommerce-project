// LOAD FOOTER
fetch("footer.html")
  .then(res => res.text())
  .then(data => {
    const container = document.getElementById("footer-container");
    if (!container) return;

    container.innerHTML = data;

    const topBtn = document.getElementById("topBtn");

    window.onscroll = function () {
      if (!topBtn) return;
      topBtn.style.display =
        document.documentElement.scrollTop > 200 ? "block" : "none";
    };

    if (topBtn) {
      topBtn.onclick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };
    }
  });

// NEWSLETTER
function subscribe() {
  const email = document.getElementById("newsletterEmail")?.value;
  const msg = document.getElementById("subscribeMsg");

  if (!email || !email.includes("@")) {
    msg.innerText = "Enter valid email";
    msg.style.color = "yellow";
    return;
  }

  msg.innerText = "Subscribed ✔️";
  msg.style.color = "lightgreen";
}