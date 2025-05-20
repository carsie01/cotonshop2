import { useState, useEffect } from "react";
import "./TrustpilotSlider.css";

const reviews = [
  {
    id: 1,
    stars: "/images/stars-5.png",
    headline: "Har handlet der flere gange",
    text: "Har handlet der flere gange, da de har et stort udvalg. Hurtig levering.",
    name: "Helle T.",
    time: "For 2 timer siden",
  },
  {
    id: 2,
    stars: "/images/stars-5.png",
    headline: "Hurtig og effektiv ekspedition 👍",
    text: "Hurtig og effektiv ekspedition 👍",
    name: "Hanne Jensen",
    time: "For 2 timer siden",
  },
  {
    id: 3,
    stars: "/images/stars-5.png",
    headline: "Hurtig levering og god hundemad",
    text: "Hurtig levering og god hundemad",
    name: "Marianne Nygaard Anders...",
    time: "For 4 timer siden",
  },
  {
    id: 4,
    stars: "/images/stars-5.png",
    headline: "Alt var perfekt",
    text: "Pakken kom hurtigt og alt var pakket godt ned.",
    name: "Thomas Madsen",
    time: "For 6 timer siden",
  },
  {
    id: 5,
    stars: "/images/stars-5.png",
    headline: "Rigtig god oplevelse",
    text: "Super kundeservice og nem bestilling.",
    name: "Sofie A.",
    time: "For 1 dag siden",
  },
];

export default function TrustpilotSlider() {
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  function getVisibleCount() {
    const width = window.innerWidth;
    if (width < 600) return 1;
    if (width < 900) return 2;
    return 3;
  }

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () => {
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const visible = reviews
    .concat(reviews)
    .slice(index, index + visibleCount);

  return (
    <section className="trustpilot-wrapper" aria-label="Trustpilot anmeldelser">
      <div className="trustpilot-slider">
      
        <div className="trustpilot-summary" aria-hidden={visibleCount < 3}>
          <h2>Fremragende</h2>
          <img src="/images/stars-5.png" alt="5 ud af 5 stjerner" className="tp-stars" />
          <p>Baseret på <strong>24.695 anmeldelser</strong></p>
          <img src="/images/trustpilot-logo.png" alt="Trustpilot logo" className="tp-logo" />
        </div>

       
        <button className="arrow left" onClick={prev} aria-label="Forrige anmeldelser">◀</button>

        <div className="trustpilot-cards">
          {visible.map((r, i) => (
            <div className="review-card" key={`${r.id}-${i}`}>
              <img src={r.stars} alt="5 stjerner" className="tp-stars" />
              <p className="verified">✔️ Verificeret</p>
              <h3>{r.headline}</h3>
              <p>{r.text}</p>
              <p className="review-footer"><strong>{r.name}</strong>, {r.time}</p>
            </div>
          ))}
        </div>

        <button className="arrow right" onClick={next} aria-label="Næste anmeldelser">▶</button>
      </div>
    </section>
  );
}
