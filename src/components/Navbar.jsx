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
        { name: "Se alle", path: "/tilbud" },
      ],
    },
    {
      name: "Nyheder",
      path: "/nyheder",
      subcategories: [{ name: "Se Nyheder", path: "/nyheder" }],
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
        { name: "Se alle", path: "/hundepleje" },
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
        { name: "Se alle", path: "/hvalpeudstyr" },
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
        { name: "Se alle", path: "/hundefoder" },
      ],
    },
    {
      name: "Hundelegetøj",
      path: "/hundelegetøj",
      subcategories: [
        { name: "Slidestærkt legetøj", path: "/hundelegetøj/slidestærkt" },
        { name: "Plys legetøj", path: "/hundelegetøj/plys" },
        { name: "Aktivitetslegetøj", path: "/hundelegetøj/aktivitet" },
        { name: "Snuse og slikkemåtte", path: "/hundelegetøj/snuseogslikmåtte" },
        { name: "Bolde", path: "/hundelegetøj/blodt" },
        { name: "Tandrensende legetøj", path: "/hundelegetøj/tandrens" },
        { name: "Se alle", path: "/hundelegetøj/" },
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
        { name: "Se alle", path: "/hundetilbehoer" },
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
        { name: "Se alle", path: "/transport" },
      ],
    },
    {
      name: "Show",
      path: "/show",
      subcategories: [
        { name: "Udstillings line", path: "/show/line" },
        { name: "Nummer clips", path: "/show/clips" },
        { name: "Se alle", path: "/show" },
      ],
    },
    {
      name: "Diverse",
      path: "/diverse",
      subcategories: [
        { name: "Til hjemmet", path: "/diverse/hjem" },
        { name: "Bøger om hunde", path: "/diverse/bøger" },
        { name: "Højtider", path: "/diverse/højtid" },
        { name: "Batterier", path: "/diverse/batteri" },
        { name: "Se alle", path: "/diverse" },
      ],
    },
    {
      name: "Mærker",
      path: "/maerker",
      subcategories: [
        { name: "C", path: "/maerker/cooldog" },
        { name: "D", path: "/maerker/dogrider" },
        { name: "O", path: "/maerker/ollipet" },
        { name: "T", path: "/maerker/trixi" },
        { name: "K", path: "/maerker/kong" },
        { name: "Se alle", path: "/maerker" },
      ],
    },
  ];
  
  function useRevealOnScroll() {
    const [show, setShow] = useState(true);
    const lastY = useRef(0);
    const ticking = useRef(false);
  
    useEffect(() => {
      const threshold = 12;     // ignorér små bevægelser
      const revealAfter = 100;  // først aktiv efter 100px scroll
  
      const onScroll = () => {
        const y = window.scrollY || 0;
        if (ticking.current) return;
        ticking.current = true;
  
        requestAnimationFrame(() => {
          const delta = y - lastY.current;
          const goingDown = delta > threshold;
          const goingUp = delta < -threshold;
  
          if (y < revealAfter) {
            setShow(true);
          } else if (goingDown) {
            setShow(false);
          } else if (goingUp) {
            setShow(true);
          }
          lastY.current = y;
          ticking.current = false;
        });
      };
  
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }, []);
  
    return show;
  }
export default function Navbar() {
  const { cart } = useCart();
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1175);
  const [openMobileCategory, setOpenMobileCategory] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();
  const searchRef = useRef();
  const mobileMenuRef = useRef();
  const showHeader = useRevealOnScroll(); // 🔹 tilføj denne linje

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
  
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setShowMobileSearch(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
        setOpenMobileCategory(null);
      }
    };
  
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setOpenMobileCategory(null);
      }
    };
  
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
  
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);
  
  return (
    <header className={`site-header ${showHeader ? "show" : ""}`}>
      <div className="top-info">
        🇩🇰 Danskejet | Gratis fragt over 499 kr. | 60 dages returret | Hurtig levering
      </div>
  
      <div className="whiteboks">
        <div className="navbar">
          {/* Burger (mobil) */}
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
  
          {/* Logo */}
          <Link to="/" className="navbar-logo" aria-label="Hjem">
            <img src="/images/logo.png" alt="Cotonshoppen.dk" />
          </Link>
  
          {/* Søg (desktop) */}
          {!isMobile && (
            <form className="search-form" role="search" onSubmit={handleSubmit}>
              <label htmlFor="search" className="sr-only">Søg efter produkter</label>
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
  
          {/* Ikoner */}
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
  
      {/* Kategoribar (desktop) */}
      {!isMobile && (
        <nav className="category-bar" aria-label="Primær kategorinavigation">
          {categories.map((cat, index) => {
            const dropdownId = `dropdown-${index}`;
            const linkId = `category-link-${index}`;
  
            return (
              <div
                key={cat.name}
                className="category-item"
                onMouseEnter={() => setOpenDropdown(dropdownId)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={cat.path}
                  id={linkId}
                  className="category-link"
                  aria-haspopup="true"
                  aria-expanded={openDropdown === dropdownId}
                  aria-controls={dropdownId}
                  onFocus={() => setOpenDropdown(dropdownId)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setOpenDropdown(dropdownId);
                    }
                  }}
                >
                  {cat.name}
                </Link>
  
                <ul
                  id={dropdownId}
                  className={`dropdown ${openDropdown === dropdownId ? "visible" : "hidden"}`}
                  aria-labelledby={linkId}
                >
                  {cat.subcategories?.map((sub) => (
                    <li key={sub.name}>
                      <Link
                        to={sub.path}
                        onClick={() => setOpenDropdown(null)}
                        onKeyDown={(e) => {
                          if (e.key === "Escape") setOpenDropdown(null);
                        }}
                      >
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </nav>
      )}
  
      {/* Backdrop (mobil) */}
      {isMobile && (
        <button
          type="button"
          className={`menu-backdrop ${menuOpen ? "show" : ""}`}
          aria-label="Luk menu"
          onClick={() => setMenuOpen(false)}
        />
      )}
  
      {/* Mobilmenu: venstreskuffe – mountet altid for animation */}
      {isMobile && (
        <nav
          id="mobile-menu"
          ref={mobileMenuRef}
          className={`mobile-categories ${menuOpen ? "open" : ""}`}
          role="navigation"
          aria-label="Mobil navigation"
          aria-hidden={!menuOpen}
        >
          {categories.map((cat, index) => {
            const isOpen = openMobileCategory === index;
            const subId = `mobile-sub-${index}`;
            const buttonId = `mobile-btn-${index}`;
  
            return (
              <div key={cat.name} className="mobile-category-group">
                <button
                  id={buttonId}
                  className="mobile-category-button"
                  aria-expanded={isOpen}
                  aria-controls={subId}
                  onClick={() =>
                    setOpenMobileCategory((prev) => (prev === index ? null : index))
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Escape") setOpenMobileCategory(null);
                  }}
                >
                  {cat.name} <span>{isOpen ? "▲" : "▼"}</span>
                </button>
  
                {isOpen && (
                  <ul id={subId} className="mobile-subcategories" aria-labelledby={buttonId}>
                    {cat.subcategories.map((sub) => (
                      <li key={sub.name}>
                        <Link
                          to={sub.path}
                          className="mobile-sub-item"
                          onClick={() => {
                            setMenuOpen(false);
                            setOpenMobileCategory(null);
                          }}
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </nav>
      )}
  
      {/* Mobil søgning overlay */}
      {isMobile && showMobileSearch && (
        <div
          className="mobile-search-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Mobil søgning"
          onClick={() => setShowMobileSearch(false)}
        >
          <form
            className="mobile-search-form"
            role="search"
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