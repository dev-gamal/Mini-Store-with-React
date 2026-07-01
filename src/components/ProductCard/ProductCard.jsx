import styles from "./ProductCard.module.css";

function ProductCard({ product, onDeleteProduct, onAddToCart }) {
  const { id, name, price, category, image } = product;

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={name} className={styles.productImage} />
      </div>

      <div className={styles.info}>
        <p className={styles.category}>{category}</p>
        <h4>{name}</h4>

        <p className={styles.price}>{price.toFixed(2)} €</p>

        <div className={styles.action}>
          <button
            className={styles.addBtn}
            onClick={() => onAddToCart(product)}
          >
            🛒 Add to cart
          </button>

          <button
            className={styles.deleteBtn}
            onClick={() => onDeleteProduct(id)}
          >
            🗑️ Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
