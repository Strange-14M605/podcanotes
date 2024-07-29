import "./globals.css";

//components
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="lemonade">
      <body className="px-20 flex flex-col ">
          <Header />
          <div className="divider m-0"></div>
          {children}
          <Footer />
      </body>
    </html>
  );
}
