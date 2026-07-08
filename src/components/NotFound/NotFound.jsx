import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <h2 className={styles.subtitle}>Oups! Page not found</h2>
      <p className={styles.text}>
        It seems the page you are looking for does not exist or has been moved.
      </p>

      <Link to="/" className={styles.button}>
        Go back to the homepage
      </Link>
    </div>
  );
}

export default NotFound;