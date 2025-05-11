import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import "./KategoriSide.css";

// 🔽 CustomDropdown-komponent
function CustomDropdown({ label, options, value, onChange }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="custom-dropdown">
      <button type="button" onClick={() => setOpen(!open)} className="dropdown-button">
        {value || label} 
      </button>
      {open && (
        <ul className="dropdown-list">
          <li onClick={() => { onChange(""); setOpen(false); }}>Alle</li>
          {options.map((opt) => (
            <li key={opt} onClick={() => { onChange(opt); setOpen(false); }}>
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function KategoriSide() {
  const { kategori = "nyheder", slug } = useParams();
  const sti = slug
    ? `/${decodeURIComponent(kategori).toLowerCase()}/${decodeURIComponent(slug).toLowerCase()}`
    : `/${decodeURIComponent(kategori).toLowerCase()}`;

  const filtreredeProdukter = products.filter((p) =>
    p.kategorier?.some((kat) =>
      kat === sti ||
      kat.startsWith(`${sti}/`) ||
      (!slug && kat.startsWith(`/${kategori}`))
    )
  );

  const underkategorier = [...new Set(
    filtreredeProdukter.flatMap((p) =>
      p.kategorier.filter((k) => k.startsWith(`/${kategori}/`))
    )
  )];

  const brands = [...new Set(filtreredeProdukter.map((p) => p.brand))];

  const [sortering, setSortering] = useState("");
  const [valgtBrand, setValgtBrand] = useState("");
  const [valgtUnderkategori, setValgtUnderkategori] = useState("");
  const [visibleCount, setVisibleCount] = useState(20);

  const [showKategori, setShowKategori] = useState(true);
  const [showBrand, setShowBrand] = useState(true);
  const [showPris, setShowPris] = useState(true);

  useEffect(() => {
    setSortering("");
    setValgtBrand("");
    setValgtUnderkategori("");
    setVisibleCount(20);
  }, [sti]);

  const visteProdukter = filtreredeProdukter
    .filter((p) => (valgtBrand ? p.brand === valgtBrand : true))
    .filter((p) => (valgtUnderkategori ? p.kategorier.includes(valgtUnderkategori) : true))
    .sort((a, b) => {
      if (sortering === "pris-asc") return parseInt(a.price) - parseInt(b.price);
      if (sortering === "pris-desc") return parseInt(b.price) - parseInt(a.price);
      return 0;
    });

  const visteBegrænset = visteProdukter.slice(0, visibleCount);

  const overskrifter = {
    nyheder: {
      titel: "Nyheder",
      tekst: "Hos Cotonshoppen.dk finder du altid mange spændende nyheder til din hund.",
    },
    "hundetilbehoer": {
      titel: "Hundetilbehør",
      tekst: "Vi har et stort udvalg af tilbehør til hunde – seler, liner, skåle og meget mere.",
    },
    "hundetilbehoer/sele": {
      titel: "Hundeseler",
      tekst: "Her finder du ergonomiske og stilfulde seler til din hund.",
    },
  };

  const sideInfo = overskrifter[sti.replace("/", "")] || {
    titel: kategori.charAt(0).toUpperCase() + kategori.slice(1),
    tekst: "Se vores udvalg nedenfor.",
  };

  return (
    <main className="kategori-side">
      <div className="kategori-layout">
        <aside className="filters">
          <div className="filter-header">
            <h2>FILTRER</h2>
            
          </div>

          <div className="filter-section">
            <button className="filter-toggle" onClick={() => setShowKategori(!showKategori)}>
              Kategorier <span>{showKategori ? "▲" : "▼"}</span>
            </button>
            {showKategori && (
  <CustomDropdown
    label="Vælg kategori"
    options={underkategorier.map(k => k.split("/").pop())}
    value={valgtUnderkategori && valgtUnderkategori.split("/").pop()}
    onChange={(val) =>
      setValgtUnderkategori(val ? underkategorier.find(k => k.endsWith(val)) : "")
    }
  />
)}
          </div>

          <div className="filter-section">
            <button className="filter-toggle" onClick={() => setShowBrand(!showBrand)}>
              Mærker <span>{showBrand ? "▲" : "▼"}</span>
            </button>
            {showBrand && (
              <CustomDropdown
                label="Vælg mærke"
                options={brands}
                value={valgtBrand}
                onChange={setValgtBrand}
              />
            )}
          </div>

          <div className="filter-section">
            <button className="filter-toggle" onClick={() => setShowPris(!showPris)}>
              Prisniveau <span>{showPris ? "▲" : "▼"}</span>
            </button>
            {showPris && (
              <CustomDropdown
                label="Vælg pris"
                options={["Laveste pris", "Højeste pris"]}
                value={
                  sortering === "pris-asc" ? "Laveste pris" :
                  sortering === "pris-desc" ? "Højeste pris" : ""
                }
                onChange={(val) =>
                  setSortering(val === "Laveste pris" ? "pris-asc" : val === "Højeste pris" ? "pris-desc" : "")
                }
              />
            )}
          </div>
        </aside>

        <section className="produkt-oversigt">
          <div className="intro-text">
          <h1>{sideInfo.titel}</h1>
          <p>{sideInfo.tekst}</p>
          </div>
          <div className="product-grid">
            {visteBegrænset.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
            {visteBegrænset.length === 0 && (
              <p>Ingen produkter matcher dine filtre.</p>
            )}
          </div>

          {visibleCount < visteProdukter.length && (
            <div style={{ textAlign: "center", marginTop: "24px" }}>
              <button onClick={() => setVisibleCount(visibleCount + 20)}>
                Se flere produkter
              </button>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
