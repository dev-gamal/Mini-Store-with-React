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
  const [selectedCategory, setSelectedCategory] = useState("All");

  const addToCart = (product) => {
    setCart((prevCart) => {
      const itemExists = prevCart.find((item) => item.id === product.id);

      if (itemExists) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const deleteProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  const categories = [
    "All",
    ...new Set(productsData.map((product) => product.category)),
  ];

  const displayedProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

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
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <h2 style={{ marginBottom: "1rem", color: "#2c3e50" }}>
            Our Products
          </h2>
          <ProductList
            products={displayedProducts}
            onDeleteProduct={deleteProduct}
            onAddToCart={addToCart}
          />
        </section>

        <aside>
          <Cart cart={cart} onRemoveFromCart={removeFromCart} />
        </aside>
      </main>

      <Footer />
    </div>
  );
}

export default App;
