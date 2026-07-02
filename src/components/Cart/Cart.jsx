import CartItem from "../CartItem/CartItem";
import styles from "./Cart.module.css";

function Cart({ cart, onRemoveFromCart }) {
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const totalPrice = cart.reduce(
    (total, item) => total + item.quantity * item.price,
    0,
  );

  return (
    <div className={styles.cartContainer}>
      <h3>My Cart</h3>

      {cart.length === 0 ? (
        <p className={styles.emptyMessage}>Your cart is empty</p>
      ) : (
        <>
          <div className={styles.itemsList}>
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onRemoveFromCart={onRemoveFromCart}
              />
            ))}
          </div>

          <div className={styles.summary}>
            <p>
              Total articles : <span>{totalItems}</span>
            </p>
            <p className={styles.totalPrice}>
              Total amount : <span>{totalPrice.toFixed(2)} €</span>
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
