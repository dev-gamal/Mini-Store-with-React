import styles from "./CategoryFilter.module.css";

function CategoryFilter() {
  return (
    <div className={styles.filterContainer}>
      <h3>Filter by category</h3>
      <p className={styles.placeholder}>[Filter Zone : All, Electronic...]</p>
    </div>
  );
}

export default CategoryFilter;
