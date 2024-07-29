function Footer() {
  const currDate = new Date().getFullYear();
  return (
    <footer>
      <p>&copy;{currDate} Podcanotes by Jova</p>
    </footer>
  );
}

export default Footer;