import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductList.module.css";

function ProductList({ products, onDeleteProduct, onAddToCart }) {
  return (
    <div className={styles.listContainer}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onDeleteProduct={onDeleteProduct}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}

export default ProductList;
