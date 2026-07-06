import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

function Header({ isDarkMode, setIsDarkMode }) {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span className={styles.icon}>🛍️</span>
        <h1>Mini Store</h1>
      </div>

      <nav className={styles.nav}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Welcome
        </NavLink>

        <NavLink
          to="/ajouter-produit"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Add a product
        </NavLink>
      </nav>

      <button
        className={styles.modeToggle}
        onClick={() => setIsDarkMode(!isDarkMode)}
        title="change the mode"
      >
        {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </header>
  );
}

export default Header;
