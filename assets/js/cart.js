// GET CART
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

// SAVE CART
function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// ADD TO CART
function addToCart(id, qty = 1) {
  let cart = getCart();
  const product = products.find(p => p.id === id);

  if (!product) {
    console.error("Product not found:", id);
    return;
  }

  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.quantity += qty;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: Number(product.price),
      image: product.image,
      quantity: qty
    });
  }

  saveCart(cart);
  updateCartCount();
  renderMiniCart();
}

// UPDATE NAV COUNT
function updateCartCount() {
  const countEl = document.getElementById("count");
  if (!countEl) return;

  let cart = getCart();
  let total = cart.reduce((sum, item) => sum + item.quantity, 0);

  countEl.innerText = total;
}

// MINI CART
function renderMiniCart() {
  const mini = document.getElementById("mini-cart");
  if (!mini) return;

  let cart = getCart();
  mini.innerHTML = "";

  if (cart.length === 0) {
    mini.innerHTML = "<p class='p-2'>Cart empty</p>";
    return;
  }

  cart.forEach(item => {
    mini.innerHTML += `
      <div class="mini-item p-2 d-flex align-items-center">
        <img src="${item.image}" width="40" class="mr-2">
        <div>
          <small>${item.name}</small><br>
          <small>₹${item.price} x ${item.quantity}</small>
        </div>
      </div>
    `;
  });
}

// FULL CART PAGE
function renderCart() {
  let cart = getCart();

  const cartContainer = document.getElementById("cart-items");
  const summaryContainer = document.getElementById("summary");

  if (!cartContainer || !summaryContainer) return;

  cartContainer.innerHTML = "";
  summaryContainer.innerHTML = "";

  let subtotal = 0;

  cart.forEach(item => {
    subtotal += item.price * item.quantity;

    cartContainer.innerHTML += `
      <div class="card p-3 mb-3 d-flex flex-row align-items-center">
        <img src="${item.image}" width="100">
        <div class="ml-3 flex-grow-1">
          <h5>${item.name}</h5>
          <p>₹${item.price}</p>

          <button onclick="changeQty(${item.id}, -1)">-</button>
          ${item.quantity}
          <button onclick="changeQty(${item.id}, 1)">+</button>
        </div>

        <div>
          ₹${item.price * item.quantity}
          <button onclick="removeItem(${item.id})" class="btn btn-danger btn-sm ml-2">
            Remove
          </button>
        </div>
      </div>
    `;

    summaryContainer.innerHTML += `
      <p>${item.name} x ${item.quantity}
      <span class="float-right">₹${item.price * item.quantity}</span></p>
    `;
  });

let tax = subtotal * 0.05;

// GET DISCOUNT
let discount = parseFloat(localStorage.getItem("discount")) || 0;

let total = subtotal + tax - discount;

// UPDATE UI
document.getElementById("discount").innerText = "₹" + discount;
document.getElementById("grand-total").innerText = "₹" + total;

  document.getElementById("subtotal").innerText = "₹" + subtotal;
  document.getElementById("tax").innerText = "₹" + tax;
  document.getElementById("discount").innerText = "₹0";
  document.getElementById("grand-total").innerText = "₹" + total;

  const titleCount = document.getElementById("cart-count-title");
  if (titleCount) titleCount.innerText = cart.length;
}

// CHANGE QTY
function changeQty(id, change) {
  let cart = getCart();

  cart = cart.map(item => {
    if (item.id === id) {
      item.quantity += change;
    }
    return item;
  });

  // 🔥 REMOVE items with 0 qty
  cart = cart.filter(item => item.quantity > 0);

  saveCart(cart);
  renderCart();
  updateCartCount();
  renderMiniCart();
}

// REMOVE ITEM
function removeItem(id) {
  let cart = getCart().filter(item => item.id !== id);
  saveCart(cart);
  renderCart();
  updateCartCount();
}

// CHECKOUT NAVIGATION
function goToCheckout() {
  window.location.href = "checkout.html";
}

// INIT (AUTO RUN)
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  renderMiniCart();
  renderCart();
});
function applyCoupon() {
  const input = document.getElementById("coupon").value.trim().toUpperCase();

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  let discount = 0;

  // 🎯 COUPON RULES
  if (input === "SAVE10") {
    discount = subtotal * 0.10; // 10% off
  } 
  else if (input === "SAVE20") {
    discount = subtotal * 0.20; // 20% off
  } 
  else if (input === "FLAT100") {
    discount = 100; // flat ₹100
  } 
  else {
    alert("Invalid Coupon ❌");
    return;
  }

  // SAVE DISCOUNT
  localStorage.setItem("discount", discount);

  // UPDATE UI
  renderCart();

  alert("Coupon Applied ✔️");
}