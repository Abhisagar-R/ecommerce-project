const products = [
  {
    id: 1,
    name: "Green Hoodie",
    price: 400,
    image: "assets/images/product1.png",
    category: "Clothing",
    desc: "Stay warm and stylish with this premium green hoodie made from soft cotton fabric. Perfect for everyday wear."
  },
  {
    id: 2,
    name: "Blue Jacket",
    price: 500,
    image: "assets/images/product2.png",
    category: "Clothing",
    desc: "A trendy blue jacket designed for comfort and warmth. Ideal for cool weather and casual outings."
  },
  {
    id: 3,
    name: "Denim Shirt",
    price: 600,
    image: "assets/images/product3.png",
    category: "Clothing",
    desc: "Classic denim shirt with a stylish fit. Durable fabric makes it perfect for everyday fashion."
  },
  {
    id: 4,
    name: "Black T-Shirt",
    price: 300,
    image: "assets/images/product4.png",
    category: "Clothing",
    desc: "Simple and comfortable black t-shirt made with breathable cotton for daily use."
  },
  {
    id: 5,
    name: "White Sneakers",
    price: 800,
    image: "assets/images/product5.png",
    category: "Shoes",
    desc: "Stylish white sneakers offering great comfort and durability for daily wear."
  },
  {
    id: 6,
    name: "Cap",
    price: 200,
    image: "assets/images/product6.png",
    category: "Accessories",
    desc: "Trendy cap designed to enhance your look while protecting you from the sun."
  },
  {
    id: 7,
    name: "Leather Jacket",
    price: 1200,
    image: "assets/images/product7.png",
    category: "Clothing",
    desc: "Premium leather jacket with a bold design and high durability for a stylish appearance."
  },
  {
    id: 8,
    name: "Sports Shoes",
    price: 900,
    image: "assets/images/product8.png",
    category: "Shoes",
    desc: "Lightweight sports shoes designed for running, workouts, and maximum comfort."
  },
  {
    id: 9,
    name: "Backpack",
    price: 700,
    image: "assets/images/product9.png",
    category: "Accessories",
    desc: "Spacious and durable backpack suitable for travel, school, or everyday use."
  }
];

const topBtn = document.getElementById("topBtn");

if (topBtn) {
  window.onscroll = function () {
    topBtn.style.display =
      document.documentElement.scrollTop > 200 ? "block" : "none";
  };

  topBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
}
