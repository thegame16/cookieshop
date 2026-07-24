// CONFIGURATION: Replace with your phone number (Country Code + Number)
const BAKERY_PHONE_NUMBER = "15551234567"; 

// Sample Menu Data
const menuItems = [
  { id: 1, name: "Butter Croissant", price: 3.50 },
  { id: 2, name: "Chocolate Muffin", price: 2.75 },
  { id: 3, name: "Sourdough Loaf", price: 6.00 },
  { id: 4, name: "Cinnamon Roll", price: 4.00 },
  { id: 5, name: "Strawberry Tart", price: 4.50 },
  { id: 6, name: "Baguette", price: 3.00 }
];

let cart = [];

// Load Menu onto page
function renderMenu() {
  const menuGrid = document.getElementById("menu-grid");
  menuGrid.innerHTML = "";

  menuItems.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${item.name}</h3>
      <p class="price">$${item.price.toFixed(2)}</p>
      <button onclick="addToCart(${item.id})">Add to Order</button>
    `;
    menuGrid.appendChild(card);
  });
}

// Add item to cart
function addToCart(itemId) {
  const existingIndex = cart.findIndex(i => i.id === itemId);
  
  if (existingIndex > -1) {
    cart[existingIndex].qty += 1;
  } else {
    const item = menuItems.find(i => i.id === itemId);
    cart.push({ ...item, qty: 1 });
  }
  
  updateCartUI();
}

// Remove item from cart
function removeFromCart(itemId) {
  cart = cart.filter(item => item.id !== itemId);
  updateCartUI();
}

// Update Cart Display & Total
function updateCartUI() {
  const cartItemsContainer = document.getElementById("cart-items");
  const totalPriceElement = document.getElementById("total-price");
  
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `<p class="empty-msg">Your cart is empty.</p>`;
    totalPriceElement.textContent = "$0.00";
    return;
  }

  cartItemsContainer.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const itemTotal = item.price * item.qty;
    total += itemTotal;

    const row = document.createElement("div");
    row.className = "cart-item";
    row.innerHTML = `
      <div>
        <strong>${item.name}</strong> x ${item.qty}<br>
        <small>$${itemTotal.toFixed(2)}</small>
      </div>
      <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
    `;
    cartItemsContainer.appendChild(row);
  });

  totalPriceElement.textContent = `$${total.toFixed(2)}`;
}

// Handle Order Submission
document.getElementById("order-form").addEventListener("submit", function(e) {
  e.preventDefault();

  if (cart.length === 0) {
    alert("Please add at least one item to your order!");
    return;
  }

  const name = document.getElementById("cust-name").value.trim();
  const address = document.getElementById("cust-address").value.trim();
  const notes = document.getElementById("cust-notes").value.trim();

  // Calculate Total
  const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  // Format Order Message for WhatsApp
  let message = `*NEW ORDER - Sweet Treats Bakery*\n\n`;
  message += `*Customer:* ${name}\n`;
  message += `*Address:* ${address}\n`;
  if (notes) message += `*Notes:* ${notes}\n`;
  message += `\n*Items Ordered:*\n`;

  cart.forEach(item => {
    message += `• ${item.name} (x${item.qty}) - $${(item.price * item.qty).toFixed(2)}\n`;
  });

  message += `\n*Total Amount:* $${total.toFixed(2)}`;

  // Encode message for URI link
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${BAKERY_PHONE_NUMBER}?text=${encodedMessage}`;

  // Open WhatsApp in new tab
  window.open(whatsappURL, "_blank");
});

// Initialize
renderMenu();
