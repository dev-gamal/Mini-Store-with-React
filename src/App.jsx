import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import productsData from "./data/products.json";
import "./App.css";

import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import CategoryFilter from "./components/CategoryFilter/CategoryFilter";
import ProductList from "./components/ProductList/ProductList";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";

function App() {
  const [products, setProducts] = useState(productsData);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const itemExists = prevCart.find((item) => item.id === product.id);
      if (itemExists)
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, delta) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === productId)
          return { ...item, quantity: Math.max(1, item.quantity + delta) };
        return item;
      }),
    );
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const categories = [
    "All",
    ...new Set(productsData.map((product) => product.category)),
  ];

  const displayedProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <BrowserRouter>
      <div
        className={isDarkMode ? "dark-mode" : "light-mode"}
        style={{
          minHeight: "100vh",
          padding: "0 20px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

          <Routes>
            <Route
              path="/"
              element={
                <main
                  style={{
                    display: "grid",
                    gridTemplateColumns: "2fr 1fr",
                    gap: "2rem",
                    alignItems: "start",
                  }}
                >
                  <section>
                    <SearchBar
                      searchTerm={searchTerm}
                      setSearchTerm={setSearchTerm}
                    />
                    <CategoryFilter
                      categories={categories}
                      selectedCategory={selectedCategory}
                      setSelectedCategory={setSelectedCategory}
                    />

                    <h2 style={{ marginBottom: "1rem" }}>Our products</h2>

                    {displayedProducts.length === 0 ? (
                      <p style={{ fontStyle: "italic" }}>
                        No products were found matching your selection.
                      </p>
                    ) : (
                      <ProductList
                        products={displayedProducts}
                        onDeleteProduct={deleteProduct}
                        onAddToCart={addToCart}
                      />
                    )}
                  </section>

                  <aside>
                    <Cart
                      cart={cart}
                      onRemoveFromCart={removeFromCart}
                      onUpdateQuantity={updateQuantity}
                    />
                  </aside>
                </main>
              }
            />

            <Route path="/ajouter-produit" element={<AddProduct />} />

            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
