import CartItem from '../CartItem/CartItem';
import styles from './Cart.module.css';

function Cart() {
  return (
    <div className={styles.cartContainer}>
      <h3>My Cart</h3>
      <div className={styles.itemsList}>
        <CartItem />
        <CartItem />
      </div>
      <div className={styles.summary}>
        <p>Total articles : <span>2</span></p>
        <p className={styles.totalPrice}>Total amount : <span>0.00 €</span></p>
      </div>
    </div>
  );
}

export default Cart;