import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductList.module.css";

function ProductList() {
  return (
    <div className={styles.listContainer}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}

export default ProductList;
