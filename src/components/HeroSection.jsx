import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <picture>
        <source
          srcSet="/images/mobilhero.jpg"
          media="(max-width: 900px)"
        />
        <img
          src="/images/hero1.png"
          
          alt="billede af coton hunnden madonna"
          className="hero-image"
        />
      </picture>
      <div className="hero-overlay">
        <h1 className="hero-title">Velkommen til cotonshoppen</h1>
        <h2 className="hero-subtitle">
          Danmarks største webshop inden for hundeudstyr
        </h2>
      </div>
    </section>
  );
}
