import Navbar from "./Navbar";
import { ThemeProvider } from "../context/ThemeContext";
import { CartProvider } from "../context/CartContext";
import { useTheme } from "../context/ThemeContext";

function Headbar() {
  const {darkMode, toggleTheme} = useTheme();

  return (
    <header className="header">
      <div className="header-brand">
        <span className="brand-mark">MS</span>
        <div>
          <span className="brand-name">MiniShop</span>
          <span className="brand-tagline">
            Curated essentials, better shopping
          </span>
        </div>
      </div>

      <div className="header-navbar">
        <Navbar />
      </div>


      <nav className="header-actions">
          <button type="button" onClick={toggleTheme} className="btn btn-sm">
            {darkMode ? "Dark" : "Light"}
          </button>
        <button type="button" className="btn btn-sm">
          Sign In
        </button>
      </nav>
    </header>
  );
}

export default Headbar;
