import styles from "./CartItem.module.css";

function CartItem({ item, onRemoveFromCart, onUpdateQuantity }) {
  return (
    <div className={styles.item}>
      <div className={styles.details}>
        <span className={styles.name}>{item.name}</span>
        <span className={styles.price}>{item.price.toFixed(2)} €</span>
      </div>

      <div className={styles.actions}>
        <div className={styles.qtyControls}>
          <button
            className={styles.qtyBtn}
            onClick={() => onUpdateQuantity(item.id, -1)}
            disabled={item.quantity === 1}
          >
            -
          </button>
          <span className={styles.qtyValue}>{item.quantity}</span>
          <button
            className={styles.qtyBtn}
            onClick={() => onUpdateQuantity(item.id, 1)}
          >
            +
          </button>
        </div>

        <button
          className={styles.removeBtn}
          title="Retirer du panier"
          onClick={() => onRemoveFromCart(item.id)}
        >
          ❌
        </button>
      </div>
    </div>
  );
}

export default CartItem;
