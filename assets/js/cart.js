let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const product = products.find(p => p.id === id);

  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));


  updateCartCount();

  console.log("Added to cart");
}

// DISPLAY CART
function displayCart() {
  const container = document.getElementById("cart-items");
  if (!container) return;

  container.innerHTML = "";

  let total = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;

    container.innerHTML += `
      <div class="d-flex justify-content-between align-items-center mb-3 border p-2">
        <h5>${item.name}</h5>
        <div>
          <button class="btn btn-sm btn-secondary" onclick="updateQty(${item.id}, -1)">-</button>
          <span class="mx-2">${item.quantity}</span>
          <button class="btn btn-sm btn-secondary" onclick="updateQty(${item.id}, 1)">+</button>
        </div>
        <span>₹${item.price * item.quantity}</span>
      </div>
    `;
  });

  document.getElementById("total").innerText = total;
}

function updateQty(id, change) {
  let item = cart.find(p => p.id === id);

  if (!item) return;

  item.quantity += change;

  if (item.quantity <= 0) {
    cart = cart.filter(p => p.id !== id);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = cart.reduce((sum, item) => sum + item.quantity, 0);

  const countEl = document.getElementById("count");
  if (countEl) {
    countEl.innerText = total;
  }
}


displayCart();