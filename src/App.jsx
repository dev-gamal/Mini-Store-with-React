import { useState } from "react";
import productsData from "./data/products.json";

import Header from "./components/Header/Header";
import CategoryFilter from "./components/CategoryFilter/CategoryFilter";
import ProductList from "./components/ProductList/ProductList";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";

function App() {
  const [products, setProducts] = useState(productsData);
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 20px",
        fontFamily: "sans-serif",
        backgroundColor: "#f5f6fa",
        minHeight: "100vh",
      }}
    >
      <Header />

      <main
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "2rem",
          alignItems: "start",
          minHeight: "70vh",
        }}
      >
        <section>
          <CategoryFilter />
          <h2 style={{ marginBottom: "1rem", color: "#2c3e50" }}>
            Our Products
          </h2>
          <ProductList />
        </section>

        <aside>
          <Cart />
        </aside>
      </main>

      <Footer />
    </div>
  );
}

export default App;
