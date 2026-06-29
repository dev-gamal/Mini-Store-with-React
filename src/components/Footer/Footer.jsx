import styles from './Footer.module.css';

function Footer() {
    const currentYear = new Date().getFullYear;

    return (
        <footer className={styles.footer}>
            <p>&copy; {currentYear} Mini Store - Built with React 19</p>
            <p className={styles.subtitle}>Developed by GAMAL BADIE</p>
        </footer>
    );
}

export default Footer;