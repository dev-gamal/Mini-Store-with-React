import styles from "./CartItem.module.css";

function CartItem({ item, onRemoveFromCart }) {
  return (
    <div className={styles.item}>
      <div className={styles.details}>
        <span className={styles.name}>{item.name}</span>
        <span className={styles.price}>
          {item.price.toFixed(2)} €{" "}
          <span className={styles.qty}>x {item.quantity}</span>
        </span>
      </div>
      <button
        className={styles.removeBtn}
        onClick={() => onRemoveFromCart(item.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default CartItem;
