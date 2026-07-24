/* Base Styles */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}

body {
  background-color: #faf7f2;
  color: #3b2f2f;
  scroll-behavior: smooth;
}

/* Hero Section */
.hero {
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80') center/cover;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  padding: 0 20px;
}

.hero-content h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  max-width: 600px;
}

.btn-primary {
  background-color: #e07a5f;
  color: white;
  text-decoration: none;
  padding: 12px 30px;
  border-radius: 30px;
  font-weight: bold;
  font-size: 1.1rem;
  transition: transform 0.2s, background-color 0.2s;
  display: inline-block;
}

.btn-primary:hover {
  background-color: #d26549;
  transform: translateY(-2px);
}

/* Layout */
.container {
  max-width: 1200px;
  margin: 3rem auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: 2.5fr 1fr;
  gap: 3rem;
  align-items: start; /* Allows sticky cart to work properly */
}

@media (max-width: 900px) {
  .container {
    grid-template-columns: 1fr;
  }
}

/* Menu Grid */
.section-header {
  margin-bottom: 2rem;
}

.section-header h2 {
  font-size: 2rem;
  color: #e07a5f;
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 2rem;
}

/* Card Styling & Image Slots */
.card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
}

.card-img-slot {
  width: 100%;
  height: 200px;
  background-color: #eee;
  position: relative;
}

.card-img-slot img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Keeps images proportioned nicely */
  display: block;
}

.card-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.card-content h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.card-content .desc {
  font-size: 0.9rem;
  color: #777;
  margin-bottom: 1rem;
  flex-grow: 1;
}

.card-content .price-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}

.price {
  font-weight: 800;
  font-size: 1.2rem;
  color: #e07a5f;
}

.add-btn {
  background-color: #81b29a;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.2s;
}

.add-btn:hover {
  background-color: #649a80;
}

/* Cart Section */
.cart-section {
  position: relative;
}

.cart-sticky {
  position: sticky;
  top: 2rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.cart-sticky h2 {
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #f0f0f0;
  padding-bottom: 0.5rem;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  background: #faf7f2;
  padding: 10px;
  border-radius: 8px;
}

.remove-btn {
  background: none;
  border: none;
  color: #e76f51;
  cursor: pointer;
  font-size: 0.8rem;
  text-decoration: underline;
}

.total-box {
  display: flex;
  justify-content: space-between;
  font-size: 1.3rem;
  font-weight: 900;
  margin: 1.5rem 0;
}

/* Form Styles */
form { display: flex; flex-direction: column; gap: 1rem; }
input, textarea {
  width: 100%; padding: 0.8rem; border: 1px solid #ddd;
  border-radius: 8px; font-size: 0.95rem; background: #faf7f2;
}
textarea { resize: vertical; height: 80px; }

.whatsapp-btn {
  background-color: #25d366;
  color: white; border: none; padding: 1rem;
  border-radius: 8px; font-size: 1.1rem; font-weight: bold;
  cursor: pointer; display: flex; align-items: center;
  justify-content: center; gap: 10px; transition: 0.2s;
}

.whatsapp-btn:hover { background-color: #1ebc57; }
