import styles from "./ProductCard.module.css";

function ProductCard() {
  return (
    <div className={styles.card}>
      <div className={styles.imagePlaceholder}>📷 Product Picture</div>
      <div className={styles.info}>
        <h4>Product name</h4>
        <p className={styles.category}>Category</p>
        <p className={styles.price}>0.00 €</p>
        <button className={styles.addBtn}>Add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
