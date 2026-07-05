import styles from './Header.module.css';

function Header({ isDarkMode, setIsDarkMode }) {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span className={styles.icon}>🛍️</span>
        <h1>Mini Store</h1>
      </div>
      <nav className={styles.nav}>
        <button 
        className={styles.modeToggle} 
        onClick={() => setIsDarkMode(!isDarkMode)} 
        title="change the mode"
        >
          {isDarkMode ? '☀️ Mode Clair' : '🌙 Mode Sombre'}
        </button>
      </nav>
    </header>
  );
}

export default Header;