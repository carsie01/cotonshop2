import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NyhederCarousel from "./components/NyhederCarousel";
import ProductCarousel from "./components/ProductCarousel";
import ProductPage from "./pages/ProductPage";
import Nyheder from "./pages/Nyheder";
import CartPage from "./pages/CartPage";
import ScrollToTopButton from "./components/ScrollToTopButton";
import TrustpilotSlider from "./components/TrustpilotSlider";
import WelcomeSection from "./components/WelcomeSection";
import InfoAccordionSection from "./components/InfoAccordionSection";

// Dummy data – flyt evt. til en separat fil senere
const popularProducts = [
  {
    id: "123",
    image: "/images/product1.jpg",
    alt: "Hundesele med snor",
    brand: "Ollipet",
    name: "Paris City sæt",
    price: "376 kr",
  },
  {
    id: "456",
    image: "/images/product2.jpg",
    alt: "Hvalpegård foldbar",
    brand: "PawHut",
    name: "Hvalpegård",
    price: "449 kr",
  },
  {
    id: "789",
    image: "/images/product3.jpg",
    alt: "Hundevogn brun",
    brand: "DogRider",
    name: "3-hjulet hundevogn",
    price: "999 kr",
  },
  {
    id: "321",
    image: "/images/product4.jpg",
    alt: "Hundeseng grå",
    brand: "LuksusBed",
    name: "Blød kurv XL",
    price: "299 kr",
  },
  {
    id: "654",
    image: "/images/product5.jpg",
    alt: "Hundeseng lyserød",
    brand: "LuksusBed",
    name: "Kurv til små hunde",
    price: "279 kr",
  },
];

const recommendedProducts = [
  {
    id: "111",
    image: "/images/product6.jpg",
    alt: "Hundefrakke med refleks",
    brand: "Ollipet",
    name: "Vinterjakke til hund",
    price: "249 kr",
  },
  {
    id: "222",
    image: "/images/product7.jpg",
    alt: "Bold med reb",
    brand: "PlayDog",
    name: "Træningslegetøj",
    price: "59 kr",
  },
  {
    id: "333",
    image: "/images/product8.jpg",
    alt: "Snusemåtte",
    brand: "PawFun",
    name: "Mental aktivering",
    price: "199 kr",
  },
  {
    id: "444",
    image: "/images/product9.jpg",
    alt: "Køletaske til foder",
    brand: "FidoBag",
    name: "Transporttaske m. isolering",
    price: "379 kr",
  },
];

export default function App() {
  const location = useLocation();

  return (
    <div>
      <Navbar />

      {/* Vises kun på forsiden */}
      {location.pathname === "/" && (
        <>
          <NyhederCarousel />
          <ProductCarousel title="Mest Populære Produkter" products={popularProducts} />
          <ProductCarousel title="Anbefalet til dig" products={recommendedProducts} />
          <TrustpilotSlider />
          <WelcomeSection />
          <InfoAccordionSection />
        </>
      )}

      <Routes>
        <Route
          path="/"
          element={<h1 style={{ textAlign: "center" }}>Velkommen til Cotonshoppen!</h1>}
        />
        <Route path="/nyheder" element={<Nyheder />} />
        <Route path="/produkt/:id" element={<ProductPage />} />
        <Route path="/kurv" element={<CartPage />} />
      </Routes>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}
