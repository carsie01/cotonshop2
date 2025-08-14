import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import CustomDropdown from "../components/CustomDropdown"; // <-- Nu importeret korrekt
import "./KategoriSide.css";

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
      tekst: "Hos Cotonshoppen.dk finder du altid mange spændende nyheder til din hund.Hold øje med vores nyheds-side, når du handler hos os, hvis du ønsker at få poterne i vores nyheder før alle andre.",
    },
    "tilbud": {
      titel: "Tilbud",
      tekst: "Her kan du finde et bredt udvalg af spændende nyheder til hunde. Du kan også besøge vores OUTLET af hundeartikler, og spare ekstra mange penge. ",
    },
    "hundepleje": {
      titel: "Hundepleje",
      tekst: "Vi har et kæmpe udvalg af kvalitets plejeprodukter til hunde - hvad enten det drejer sig om økologisk shampoo og balsam, pelsredskaber og klippemaskiner, tandpleje og hygiejne, grooming udstyr, potepleje, eller hvalpeudstyr.",
    },
    "hvalpeudstyr": {
      titel: "Hvalpeudstyr",
      tekst: "Find alt det nødvendige hvalpeudstyr hos Cotonshoppen.dk – fra legetøj til plejeprodukter, alt til din hvalps trivsel.",
    },
    "hundefoder": {
      titel: "Hundefoder",
      tekst: "At finde det rigtige hundefoder kan være lidt af en jungle – hvad er rigtigt og hvad er godt for din hund? Få svaret hos Cotonshoppen - vi har det bedste hundefoder og fodertilskud samt godbidder til hunde. Samtidig finder du her vores sortiment af godbidstasker - så du nemt og bekvemt kan have godbidder og snacks med under din hunds oplæring og træning.",
    },
    "hundelegetøj": {
      titel: "Hundelegetøj",
      tekst: "Gå på opdagelse i vores store udvalg af legetøj til hunde. Uanset din hunds alder, race eller legestil har vi det perfekte legetøj til din hund.",
    },
    "hundetilbehoer": {
      titel: "Hundetilbehør",
      tekst: "Udforsk vores store udvalg af tilbehør til hunde",
    },
    "transport": {
      titel: "Transport",
      tekst: "Her finder du et bredt udvalg af hundetasker, transportkasser og lignende til din hund.",
    },
    "show": {
      titel: "Show",
      tekst: "Her finder du alt tilbehør til din showhund både til brug indeni og uden for showringen - der er alt lige fra udstillingsvogne til groomingprodukter. Der er mange aspekter af hundeudstillinger, hvor hunden skal yde sit bedste. Den skal være sund og udstråle sundhed, have et smukt ydre - og dertil kommer alt det udstyr der skal bruges før hundeudstillingen og i selve ringen. Alt det kan du finde her!",
    },
    "diverse": {
      titel: "Diverse",
      tekst: "Hundetasker samt transportkasser godkendt til lufttrafik. Madskåle samt vandskåle af enhver afskygning - hvad med en hundedrikkeflaske til vægmontering? Alt i hundetæpper og hundesenge - bl.a. luksus madresser i wellness fleece eller hvad med en afrikansk fair-trade hundekurv lavet af gamle bildæk?  Vi fører også et stort udvalg i hundesenge fra Buster.  I den mere kulørte ende har vi hundehuler og hundesenge formet som krokodiller eller hvad med en Monster Iglo? Du finder også trimmeborde både med og uden hjul - du kan også få et letvægtstrimmebord til rejsebrug. Lider din hund af utryghed eller køresyge? Mange hunde frygter denne tid på året med fyrværkeri og høje brag.  Hos Cotonshoppen.dk kan du finde et stort udvalg indenfor naturlige utrygheddæmpende midler.  Vi fører produkter fra bl.a. Serene Um, Zylkene og Dap. Tøv ikke med at kontakte os på adressen salg@cotonshoppen.dk, hvis du har spørgsmål af enhver art.",
    },
    "maerker": {
      titel: "Mærker",
      tekst: "Her finder du alle de mærker vi tilbyder på shoppen.",
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
    <CustomDropdown
      label="Vælg kategori"
      options={underkategorier.map(k => k.split("/").pop())}
      value={valgtUnderkategori && valgtUnderkategori.split("/").pop()}
      onChange={(val) =>
        setValgtUnderkategori(val ? underkategorier.find(k => k.endsWith(val)) : "")
      }
    />
  </div>

  <div className="filter-section">
    <CustomDropdown
      label="Vælg mærke"
      options={brands}
      value={valgtBrand}
      onChange={setValgtBrand}
    />
  </div>

  <div className="filter-section">
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
  </div>
</aside>


   
    <section className="produkt-oversigt">
      <div className="mobile-filters">
        <CustomDropdown
          label="Kategori"
          options={underkategorier.map(k => k.split("/").pop())}
          value={valgtUnderkategori && valgtUnderkategori.split("/").pop()}
          onChange={(val) =>
            setValgtUnderkategori(val ? underkategorier.find(k => k.endsWith(val)) : "")
          }
        />
        <CustomDropdown
          label="Mærker"
          options={brands}
          value={valgtBrand}
          onChange={setValgtBrand}
        />
        <CustomDropdown
          label="Pris"
          options={["Laveste pris", "Højeste pris"]}
          value={
            sortering === "pris-asc" ? "Laveste pris" :
            sortering === "pris-desc" ? "Højeste pris" : ""
          }
          onChange={(val) =>
            setSortering(val === "Laveste pris" ? "pris-asc" : val === "Højeste pris" ? "pris-desc" : "")
          }
        />
      </div>

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
          <button className="load-more-button" onClick={() => setVisibleCount(visibleCount + 20)} aria-label="Indlæs flere produkter">
            Se flere produkter
          </button>
        </div>
      )}
    </section>
  </div>
</main>

  );
}
