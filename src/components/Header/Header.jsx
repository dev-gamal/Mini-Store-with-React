import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span className={styles.icon}>🛍️</span>
        <h1>Mini Store</h1>
      </div>
      <nav className={styles.nav}>
        <button className={styles.modeToggle} title="change the mode">
          🌙 Dark Mode
        </button>
      </nav>
    </header>
  );
}

export default Header;