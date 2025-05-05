import { useState } from "react";
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
];

export default function TrustpilotSlider() {
  const [index, setIndex] = useState(0);
  const visibleCount = 3;

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
        {/* Venstre fast felt */}
        <div className="trustpilot-summary">
          <h2>Fremragende</h2>
          <img src="/images/stars-5.png" alt="5 ud af 5 stjerner" className="tp-stars" />
          <p>
            Baseret på <strong>24.695 anmeldelser</strong>
          </p>
          <img
            src="/images/trustpilot-logo.png"
            alt="Trustpilot"
            className="tp-logo"
          />
        </div>

        {/* Pile og anmeldelser */}
        <button className="arrow left" onClick={prev} aria-label="Forrige">◀</button>

        <div className="trustpilot-cards">
          {visible.map((r) => (
            <div className="review-card" key={r.id}>
              <img src={r.stars} alt="5 stjerner" className="tp-stars" />
              <p className="verified">✔️ Verificeret</p>
              <h3>{r.headline}</h3>
              <p>{r.text}</p>
              <p className="review-footer">
                <strong>{r.name}</strong>, {r.time}
              </p>
            </div>
          ))}
        </div>

        <button className="arrow right" onClick={next} aria-label="Næste">▶</button>
      </div>
    </section>
  );
}
