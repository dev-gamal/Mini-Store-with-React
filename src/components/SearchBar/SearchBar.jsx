import styles from './SearchBar.module.css';

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="🔍 Search for a product..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.searchInput}
      />
    </div>
  );
}

export default SearchBar;