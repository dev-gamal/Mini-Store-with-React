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
import AddProduct from "./components/AddProduct/AddProduct";

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

  const handleAddProduct = (newProductData) => {
    setProducts((prevProducts) => {
      const nextId =
        prevProducts.length > 0
          ? Math.max(...prevProducts.map((p) => p.id)) + 1
          : 1;

      const productWithId = {
        ...newProductData,
        id: nextId,
      };

      return [...prevProducts, productWithId];
    });
  };

  return (
    <BrowserRouter>
      <div className={`app-wrapper ${isDarkMode ? "dark-mode" : "light-mode"}`}>
        <div className="main-container">
          <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

          <Routes>
            <Route
              path="/"
              element={
                <main className="main-layout">
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

                    <h2 className="products-title">Our products</h2>

                    {displayedProducts.length === 0 ? (
                      <p className="empty-message">
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

            <Route
              path="/add-product"
              element={<AddProduct onAddProduct={handleAddProduct} />}
            />

            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
