
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import NyhederCarousel from "./components/NyhederCarousel";
import ProductCarousel from "./components/ProductCarousel";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import ScrollToTopButton from "./components/ScrollToTopButton";
import TrustpilotSlider from "./components/TrustpilotSlider";
import WelcomeSection from "./components/WelcomeSection";
import InfoAccordionSection from "./components/InfoAccordionSection";
import InfoBanner from "./components/InfoBanner";
import KategoriSide from "./pages/KategoriSide";
import SoegeSide from "./pages/SoegeSide";

import products from "./data/products"; // importér fælles datakilde

// Filtrér produkter med tags
const popularProducts = products.filter((p) => p.tags?.includes("populaer"));
const recommendedProducts = products.filter((p) => p.tags?.includes("anbefalet"));

export default function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        {/* Forside */}
        <Route
          path="/"
          element={
            <>
            <HeroSection />
              <NyhederCarousel />
              <ProductCarousel title="Nyt på shoppen" products={popularProducts} />
              <ProductCarousel title="Sælger hurtigt" products={recommendedProducts} />
              <TrustpilotSlider />
              <WelcomeSection />
              <InfoAccordionSection />
              <InfoBanner />
            </>
          }
        />

        {/* Global søgning */}
        <Route path="/soeg" element={<SoegeSide />} />

        {/* Dynamisk kategorivisning */}
        <Route path="/:kategori" element={<KategoriSide />} />
        <Route path="/:kategori/:slug" element={<KategoriSide />} />

        {/* Kurv og produktsider */}
        <Route path="/kurv" element={<CartPage />} />
        <Route path="/produkt/:id" element={<ProductPage />} />
      </Routes>

      <ScrollToTopButton />
      <Footer />
    </div>
  );
}
