import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Heart, User, ShoppingCart } from "lucide-react";

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
      { name: "Foder og godbidder til hvalpe", path: "/hvalpeudstyr/foder" },
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
    path: "/hundelegetøj",
    subcategories: [
      { name: "Slidestærkt legetøj", path: "/hundelegetøj/slidestærkt" },
      { name: "Plys legetøj", path: "/hundelegetøj/plys" },
      { name: "Aktivitetslegetøj", path: "/hundelegetøj/aktivitet" },
      { name: "Snuse og slikkemåtte", path: "/hundelegetøj/snuseogslikmåtte" },
      { name: "Bolde", path: "/hundelegetøj/blodt" },
      { name: "Tandrensende legetøj", path: "/hundelegetøj/tandrens" },
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
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      navigate(`/soeg?q=${encodeURIComponent(search.trim())}`);
      setSearch("");
    }
  };

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
  <img src="/images/logo.png" alt="Cotonshoppen.dk – For All Dogs" width="200" />
</Link>

          {/* Søgning */}
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

          {/* Ikoner */}
          <div className="nav-icons">
            <Link to="/favoritter" aria-label="Favoritter">
              <Heart size={24} strokeWidth={1.75} />
            </Link>
            <Link to="/kurv" aria-label="Kurv" className="cart-icon">
              <ShoppingCart size={24} strokeWidth={1.75} />
              {cart.length > 0 && <span className="cart-count">({cart.length})</span>}
            </Link>
            <Link to="/login" aria-label="Min konto">
              <User size={24} strokeWidth={1.75} />
            </Link>
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
                  <Link to={sub.path} key={sub.name} className="dropdown-item">
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
