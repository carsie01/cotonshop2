import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";



export default function Navbar() {
  const { cart } = useCart();
  return (
    <header>
      
      {/* Info bar */}
      <div className="top-info">
        🇩🇰 Danskejet | Gratis fragt over 499 kr. | 60 dages returret | Hurtig levering
      </div>

      {/* Midterste del med logo, søg, ikoner */}
      <div className="whiteboks" >
      <div className="navbar">
        <Link to="/" className="navbar-logo" aria-label="Hjem">
          🐶 Cotonshoppen
        </Link>

        <form className="search-form" role="search" aria-label="Søg">
          <label htmlFor="search" className="sr-only"></label>
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

       {/* Kategorilinks */}
       <nav className="category-bar" aria-label="Kategori-navigation">
        <Link to="/tilbud">Tilbud</Link>
        <Link to="/nyheder">Nyheder</Link>
        <Link to="/hundepleje">Hundepleje</Link>
        <Link to="/Hvalpeudstyr">Hvalpeudstyr</Link>
        <Link to="/Hundeudstyr">Hundeudstyr</Link>
        <Link to="/Hundefoder">Hundefoder</Link>
        <Link to="/Hundelegetøj">Hundelegetøj</Link>
        <Link to="/Hundetilbehør">Hundetilbehør</Link>
        <Link to="/Transport">Transport</Link>
        <Link to="/Show">Show</Link>
        <Link to="/Diverse">Diverse</Link>
        <Link to="/Mærker">Mærker</Link>
      </nav>
     
    </header>
  );
}
