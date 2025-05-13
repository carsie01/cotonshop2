import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Heart, User, ShoppingCart, Search, X } from "lucide-react";


  const categories = [
    {
      name: "Tilbud",
      path: "/tilbud",
      subcategories: [
        { name: "Sæt af vare m. Rabat", path: "/tilbud/sæt" },
        { name: "Sidste Chance", path: "/tilbud/sidstechance" },
        { name: "Spot tilbud", path: "/tilbud/spot" },
      ],
    },
    {
      name: "Nyheder",
      path: "/nyheder",
      subcategories: [{ name: "Se Nyheder", path: "/nyheder/2025" }],
    },
    {
      name: "Hundepleje",
      path: "/hundepleje",
      subcategories: [
        { name: "Pelspleje", path: "/hundepleje/pelspleje" },
        { name: "Poter og klør", path: "/hundepleje/poterogklør" },
        { name: "Øjne og ører", path: "/hundepleje/øjneogører" },
        { name: "Tandpleje", path: "/hundepleje/tandpleje" },
        { name: "Trimmere og Klippemaskiner", path: "/hundepleje/trimmerogklippemaskiner" },
        { name: "Diverse hundepleje", path: "/hundepleje/diverse" },
        { name: "Hunde pleje sæt", path: "/hundepleje/sæt" },
      ],
    },
    {
      name: "Hvalpeudstyr",
      path: "/hvalpeudstyr",
      subcategories: [
        { name: "Til opdrættere", path: "/hvalpeudstyr/opdrættere" },
        { name: "Hvalpe sæt", path: "/hvalpeudstyr/sæt" },
        { name: "Hvalpe legetøj", path: "/hvalpeudstyr/legetøj" },
        { name: "Foder og godbidder", path: "/hvalpeudstyr/foder" },
        { name: "Renlighedstræning", path: "/hvalpeudstyr/renlighedstræning" },
        { name: "Pelspleje til hvalpe", path: "/hvalpeudstyr/pelspleje" },
        { name: "Hvalpegård", path: "/hvalpeudstyr/hvalpegård" },
        { name: "Snor og sele", path: "/hvalpeudstyr/snorogsele" },
      ],
    },
    {
      name: "Hundefoder",
      path: "/hundefoder",
      subcategories: [
        { name: "Godbidder og ben", path: "/hundefoder/godbidderogben" },
        { name: "Våd foder", path: "/hundefoder/vådfoder" },
        { name: "Tør foder", path: "/hundefoder/tørfoder" },
        { name: "Tilskud", path: "/hundefoder/tilskud" },
      ],
    },
    {
      name: "Hundelegetøj",
      path: "/hundelegetoj",
      subcategories: [
        { name: "Slidestærkt legetøj", path: "/hundelegetoj/slidestærkt" },
        { name: "Plys legetøj", path: "/hundelegetoj/plys" },
        { name: "Aktivitetslegetøj", path: "/hundelegetoj/aktivitet" },
        { name: "Snuse og slikkemåtte", path: "/hundelegetoj/snuseogslikmåtte" },
        { name: "Bolde", path: "/hundelegetoj/blodt" },
        { name: "Tandrensende legetøj", path: "/hundelegetoj/tandrens" },
      ],
    },
    {
      name: "Hundetilbehør",
      path: "/hundetilbehoer",
      subcategories: [
        { name: "Senge og kurve", path: "/hundetilbehoer/sengogkurv" },
        { name: "Mad-og vandskåle", path: "/hundetilbehoer/skåle" },
        { name: "Sele og halsbånd", path: "/hundetilbehoer/halsbaandogsele" },
        { name: "Hundesnor", path: "/hundetilbehoer/hundesnor" },
        { name: "Hundetegn", path: "/hundetilbehoer/hundetegn" },
        { name: "Poser og holdere", path: "/hundetilbehoer/poser" },
        { name: "Tøj", path: "/hundetilbehoer/tøj" },
        { name: "Sko", path: "/hundetilbehoer/sko" },
        { name: "Trapper", path: "/hundetilbehoer/trapper" },
        { name: "Hundebur", path: "/hundetilbehoer/hundebur" },
        { name: "Tæpper", path: "/hundetilbehoer/tæppe" },
      ],
    },
    {
      name: "Transport",
      path: "/transport",
      subcategories: [
        { name: "Hunde klapvogn", path: "/transport/klapvogn" },
        { name: "Autostole", path: "/transport/autostol" },
        { name: "Cykelkurv", path: "/transport/cykelkurv" },
        { name: "Rygsæk", path: "/transport/rygsæk" },
        { name: "Hundebur", path: "/transport/hundebur" },
      ],
    },
    {
      name: "Show",
      path: "/show",
      subcategories: [
        { name: "Udstillings line", path: "/show/line" },
        { name: "Udstillings vogn", path: "/show/vogn" },
        { name: "Nummer clips", path: "/show/clips" },
      ],
    },
    {
      name: "Diverse",
      path: "/diverse",
      subcategories: [
        { name: "Til hjemmet", path: "/diverse/hjem" },
        { name: "Bøger om hunde", path: "/diverse/bøger" },
        { name: "Best sellers", path: "/diverse/bedste" },
        { name: "Højtider", path: "/diverse/højtid" },
        { name: "Sæson", path: "/diverse/sæson" },
        { name: "Batterier", path: "/diverse/batteri" },
      ],
    },
    {
      name: "Mærker",
      path: "/maerker",
      subcategories: [
        { name: "Ollipet", path: "/maerker/ollipet" },
        { name: "DogRider", path: "/maerker/dogrider" },
        { name: "CoolDog", path: "/maerker/cooldog" },
      ],
    },
  ];
  


  export default function Navbar() {
    const { cart } = useCart();
    const [search, setSearch] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);
    const [showMobileSearch, setShowMobileSearch] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1175);
    const [openMobileCategory, setOpenMobileCategory] = useState(null);
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
              <button
                className="burger-menu"
                onClick={toggleMenu}
                aria-label="Åbn menu"
                aria-haspopup="true"
                aria-controls="mobile-menu"
                aria-expanded={menuOpen}
              >
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
  
        {/* Desktop dropdown */}
        {!isMobile && (
          <nav className="category-bar" aria-label="Kategori-navigation">
            {categories.map((cat) => (
              <div className="category-item" key={cat.name}>
                <Link to={cat.path} className="category-link">{cat.name}</Link>
                {cat.subcategories?.length > 0 && (
                  <div className="dropdown">
                    {cat.subcategories.map((sub) => (
                      <Link to={sub.path} key={sub.name} className="dropdown-item">
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        )}
  
        {/* Mobilmenu */}
        {isMobile && menuOpen && (
          <div
            id="mobile-menu"
            className="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobil navigation"
          >
            <button
              className="close-menu"
              onClick={toggleMenu}
              aria-label="Luk menu"
            >
              ✕
            </button>
  
            <nav className="mobile-categories" role="navigation" aria-label="Primære kategorier">
            {categories.map((cat) => {
  const isOpen = openMobileCategory === cat.name;
  const subId = `subcategory-${cat.name}`;
  const catId = `category-${cat.name}`;

  return (
    <div key={cat.name} className="mobile-category-group">
      <button
        className="mobile-category-button"
        aria-expanded={isOpen}
        aria-controls={subId}
        id={catId}
        onClick={() =>
          setOpenMobileCategory((prev) => (prev === cat.name ? null : cat.name))
        }
      >
        <span>{cat.name}</span>
        {cat.subcategories?.length > 0 && (
          <span aria-hidden="true">{isOpen ? "▲" : "▼"}</span>
        )}
      </button>

      {/* ✅ Her er ændringen: kun render hvis åben */}
      {isOpen && cat.subcategories?.length > 0 && (
        <div
          id={subId}
          role="region"
          aria-labelledby={catId}
          className="mobile-subcategories"
        >
          {cat.subcategories.map((sub) => (
            <Link
              key={sub.name}
              to={sub.path}
              onClick={toggleMenu}
              className="mobile-sub-item"
            >
              – {sub.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
})}

            </nav>
          </div>
        )}
  
        {/* Mobil søgning */}
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