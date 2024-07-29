function Footer() {
  const currDate = new Date().getFullYear();
  return (
    <footer className="footer text-neutral-content footer-center absolute bottom-4 left-0">
      <p>&copy;{currDate} Podcanotes by Jova</p>
    </footer>
  );
}

export default Footer;