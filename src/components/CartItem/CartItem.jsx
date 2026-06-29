import styles from './CartItem.module.css';

function CartItem() {
  return (
    <div className={styles.item}>
      <div>
        <span className={styles.name}>Article Cart</span>
        <span className={styles.price}> 0.00 €</span>
      </div>
      <button className={styles.removeBtn}>❌</button>
    </div>
  );
}

export default CartItem;