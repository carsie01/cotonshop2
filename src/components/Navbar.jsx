// src/components/Navbar.jsx
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";


const categories = [
  {
    name: "Tilbud",
    path: "/tilbud",
    subcategories: [
      { name: "Udsalg", path: "/tilbud/udsalg" },
      { name: "Spar 20%", path: "/tilbud/20" },
    ],
  },
  {
    name: "Nyheder",
    path: "/nyheder",
    subcategories: [
      { name: "Nyheder 2025", path: "/nyheder/2025" },
      { name: "Populære", path: "/nyheder/populaere" },
    ],
  },
  {
    name: "Hvalpeudstyr",
    path: "/hvalpeudstyr",
    subcategories: [
      { name: "Legetøj", path: "/hvalpeudstyr/legetøj" },
      { name: "Foder", path: "/hvalpeudstyr/foder" },
      { name: "Senge", path: "/hvalpeudstyr/senge" },
    ],
  },
  {
    name: "Hundepleje",
    path: "/hundepleje",
    subcategories: [
      { name: "Pelspleje", path: "/hundepleje/pelspleje" },
      { name: "Øjne & ører", path: "/hundepleje/sanser" },
      { name: "Negle & poter", path: "/hundepleje/poter" },
    ],
  },
  {
    name: "Hundefoder",
    path: "/hundefoder",
    subcategories: [
      { name: "Tørfoder", path: "/hundefoder/torfoder" },
      { name: "Vådfoder", path: "/hundefoder/vadfoder" },
      { name: "Snacks", path: "/hundefoder/snacks" },
    ],
  },
  {
    name: "Hundelegetøj",
    path: "/hundelegetøj",
    subcategories: [
      { name: "Aktivitetslegetøj", path: "/hundelegetøj/aktivitet" },
      { name: "Blødt legetøj", path: "/hundelegetøj/blodt" },
    ],
  },
  {
    name: "Hundetilbehør",
    path: "/hundetilbehoer",
    subcategories: [
      { name: "Halsbånd", path: "/hundetilbehoer/halsbaand" },
      { name: "Seler", path: "/hundetilbehoer/seler" },
    ],
  },
  {
    name: "Transport",
    path: "/transport",
    subcategories: [
      { name: "Tasker", path: "/transport/tasker" },
      { name: "Bure & seler", path: "/transport/bure" },
    ],
  },
  {
    name: "Show",
    path: "/show",
    subcategories: [
      { name: "Showline", path: "/show/line" },
      { name: "Udstillingsudstyr", path: "/show/udstyr" },
    ],
  },
  {
    name: "Diverse",
    path: "/diverse",
    subcategories: [
      { name: "Til hjemmet", path: "/diverse/hjem" },
      { name: "Gaver", path: "/diverse/gaver" },
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

  return (
    <header>
      {/* Info bar */}
      <div className="top-info">
        🇩🇰 Danskejet | Gratis fragt over 499 kr. | 60 dages returret | Hurtig levering
      </div>

      {/* Top del: logo, søgning og ikoner */}
      <div className="whiteboks">
        <div className="navbar">
          <Link to="/" className="navbar-logo" aria-label="Hjem">
            🐶 Cotonshoppen
          </Link>

          <form className="search-form" role="search" aria-label="Søg">
            <label htmlFor="search" className="sr-only">Søg</label>
            <input
              id="search"
              name="search"
              type="search"
              placeholder="Søg her..."
            />
          </form>

          <div className="nav-icons">
            <button aria-label="Favoritter">🤍</button>
            <Link to="/kurv" aria-label="Kurv">
              🛒 {cart.length > 0 && <span>({cart.length})</span>}
            </Link>
            <button aria-label="Min konto">👤</button>
          </div>
        </div>
      </div>

      {/* Kategori-navigation */}
      <nav className="category-bar" aria-label="Kategori-navigation">
        {categories.map((cat) => (
          <div className="category-item" key={cat.name}>
            <Link to={cat.path} className="category-link">
              {cat.name}
            </Link>
            {cat.subcategories.length > 0 && (
              <div className="dropdown">
                {cat.subcategories.map((sub) => (
                  <Link
                    to={sub.path}
                    key={sub.name}
                    className="dropdown-item"
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </header>
  );
}
