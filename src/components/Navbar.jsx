import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Heart, User, ShoppingCart, Search, X } from "lucide-react";

const categories = [
  { name: "Tilbud", path: "/tilbud" },
  { name: "Nyheder", path: "/nyheder" },
  { name: "Hundepleje", path: "/hundepleje" },
  { name: "Hvalpeudstyr", path: "/hvalpeudstyr" },
  { name: "Hundefoder", path: "/hundefoder" },
  { name: "Hundelegetøj", path: "/hundelegetoj" },
  { name: "Hundetilbehør", path: "/hundetilbehoer" },
  { name: "Transport", path: "/transport" },
  { name: "Show", path: "/show" },
  { name: "Diverse", path: "/diverse" },
  { name: "Mærker", path: "/maerker" },
];

export default function Navbar() {
  const { cart } = useCart();
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1175);
  const navigate = useNavigate();
  const searchRef = useRef();

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleSearch = () => setShowMobileSearch((prev) => !prev);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/soeg?q=${encodeURIComponent(search.trim())}`);
      setSearch("");
      setShowMobileSearch(false);
    }
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1175);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setShowMobileSearch(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showMobileSearch && searchRef.current && !searchRef.current.contains(event.target)) {
        setShowMobileSearch(false);
      }
    };
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showMobileSearch]);
  

  useEffect(() => {
    if (showMobileSearch && searchRef.current) {
      searchRef.current.focus();
    }
  }, [showMobileSearch]);

  return (
    <header>
      <div className="top-info">
        🇩🇰 Danskejet | Gratis fragt over 499 kr. | 60 dages returret | Hurtig levering
      </div>

      <div className="whiteboks">
        <div className="navbar">
          {isMobile && (
            <button className="burger-menu" onClick={toggleMenu} aria-label="Åbn menu">
              ☰
            </button>
          )}

          <Link to="/" className="navbar-logo" aria-label="Hjem">
            <img src="/images/logo.png" alt="Cotonshoppen.dk – For All Dogs" width="200" />
          </Link>

          {!isMobile && (
            <form className="search-form" role="search" onSubmit={handleSubmit}>
              <input
                id="search"
                name="search"
                type="search"
                placeholder="Søg her..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </form>
          )}

          <div className="nav-icons">
            {isMobile && (
              <button className="search-toggle" onClick={toggleSearch} aria-label="Åbn søgning">
                <Search size={24} strokeWidth={1.75} />
              </button>
            )}
            <Link to="/favoritter" aria-label="Favoritter">
              <Heart size={24} strokeWidth={1.75} />
            </Link>
            <Link to="/kurv" aria-label="Kurv" className="cart-icon">
              <ShoppingCart size={24} strokeWidth={1.75} />
              {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
            </Link>
            <Link to="/login" aria-label="Min konto">
              <User size={24} strokeWidth={1.75} />
            </Link>
          </div>
        </div>
      </div>

      {!isMobile && (
        <nav className="category-bar" aria-label="Kategori-navigation">
          {categories.map((cat) => (
            <div className="category-item" key={cat.name}>
              <Link to={cat.path} className="category-link">
                {cat.name}
              </Link>
            </div>
          ))}
        </nav>
      )}

      {isMobile && menuOpen && (
        <div className="mobile-menu" role="dialog" aria-modal="true">
          <button className="close-menu" onClick={toggleMenu} aria-label="Luk menu">
            ✕
          </button>
          <div className="mobile-categories">
            {categories.map((cat) => (
              <Link key={cat.name} to={cat.path} onClick={toggleMenu}>
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {isMobile && showMobileSearch && (
        <div className="mobile-search-overlay" onClick={() => setShowMobileSearch(false)}>
          <form
            className="mobile-search-form"
            onSubmit={handleSubmit}
            onClick={(e) => e.stopPropagation()}
          >
            <input
              type="search"
              placeholder="Søg her..."
              value={search}
              ref={searchRef}
              onChange={(e) => setSearch(e.target.value)}
              autoFocus
            />
            <button type="submit">Søg</button>
            <button
              type="button"
              onClick={() => setShowMobileSearch(false)}
              aria-label="Luk søgning"
              className="search-close-btn"
            >
              <X size={20} />
            </button>
          </form>
        </div>
      )}
    </header>
  );
}
