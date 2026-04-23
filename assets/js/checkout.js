// ✅ BUTTON CONTROL FUNCTION
function checkCartAndToggleButton() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const btn = document.getElementById("checkout-btn");

  if (cart.length === 0) {
    btn.disabled = true;
    btn.classList.add("btn-secondary");
    btn.classList.remove("btn-success");
    btn.innerText = "Cart is Empty";
  } else {
    btn.disabled = false;
    btn.classList.add("btn-success");
    btn.classList.remove("btn-secondary");
    btn.innerText = "Place Order";
  }
}

// ✅ RUN ON PAGE LOAD
checkCartAndToggleButton();


// ✅ FORM SUBMIT (ONLY ONE)
document.getElementById("checkout-form").addEventListener("submit", function(e) {
  e.preventDefault();

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // ❌ EMPTY CART
  if (cart.length === 0) {
    document.getElementById("error").innerText = "❌ Cart is empty!";

    setTimeout(() => {
      document.getElementById("error").innerText = "";
    }, 2000);

    return;
  }

  // ✅ SUCCESS
  document.getElementById("error").innerText = "";

  alert("Order placed successfully!");

  // CLEAR CART
  localStorage.removeItem("cart");

  // UPDATE BUTTON
  checkCartAndToggleButton();

  // REDIRECT
  window.location.href = "index.html";
});

const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

topBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
