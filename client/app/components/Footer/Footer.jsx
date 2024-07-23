import styles from './Footer.css';

function Footer() {
  const currDate = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <p>&copy;{currDate} Podcanotes by Jova</p>
    </footer>
  );
}

export default Footer;