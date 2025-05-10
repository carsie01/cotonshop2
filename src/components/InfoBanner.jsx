// src/components/InfoBanner.jsx
import { FaPaw } from "react-icons/fa";
import "./InfoBanner.css";

const bannerItems = [
  "Billig og hurtig levering i DK",
  "60 Dages returret",
  "Fri fragt over 499kr",
  "17 års erfaring",
];

export default function InfoBanner() {
  return (
    <section className="info-banner" aria-label="Fordele ved Cotonshoppen">
      {bannerItems.map((item, index) => (
        <div className="info-banner-item" key={index}>
          <FaPaw className="info-banner-icon" aria-hidden="true" />
          <span>{item}</span>
        </div>
      ))}
    </section>
  );
}
