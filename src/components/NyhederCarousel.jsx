import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./NyhederCarousel.css";


const slides = [
  {
    id: 1,
    image: "/images/nyhed1.jpg",
    alt: "Billede af engelsk bulldog i kurv",
    link: "/maerker/ollipet",
    title: "Se Nyheder fra Ollipet",
    description: "Opdag de nye farver og modeller i vores populære hundesenge.",
  },
  {
    id: 2,
    image: "/images/nyhed2.jpg",
    alt: "Skålesæt i mocka farve",
    link: "/tilbud/sæt",
    title: "10 % på sæt af varer",
    description: "Forkæl dig selv og din firbenede ven med skarpe tilbud.",
  },
  {
    id: 3,
    image: "/images/nyhed3.jpg",
    alt: "Banner med nye sommerfarver",
    link: "/nyheder",
    title: "Vores favoritter",
    description: "Se vores kunders favorriter",
  },
];

export default function NyhederCarousel({ title }) {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
  const trackRef = useRef(null);
  const slideRefs = useRef([]);

  // Opdater viewport på resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1000);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Registrér scroll (mobil)
  useEffect(() => {
    if (!isMobile) return;

    const track = trackRef.current;
    if (!track) return;

    const handleScroll = () => {
      const trackRect = track.getBoundingClientRect();
      const centerX = trackRect.left + trackRect.width / 2;
      let closestIndex = 0;
      let closestDistance = Infinity;

      slideRefs.current.forEach((slide, i) => {
        const rect = slide.getBoundingClientRect();
        const slideCenter = rect.left + rect.width / 2;
        const distance = Math.abs(slideCenter - centerX);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = i;
        }
      });

      setCurrent(closestIndex);
    };

    const el = trackRef.current;
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  const goToSlide = (index) => {
    if (slideRefs.current[index]) {
      slideRefs.current[index].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
      setCurrent(index);
    }
  };

  return (
    <section className="carousel-container" aria-label="Nyheder karusel">
      <h2 className="section-title">{title}</h2>

      <div className="carousel-wrapper">
        <div className="carousel-track" ref={trackRef}>
          {slides.map((slide, index) => (
            <Link
              key={slide.id}
              to={slide.link}
              className="carousel-slide"
              ref={(el) => (slideRefs.current[index] = el)}
              aria-label={`Slide ${index + 1}: ${slide.title}`}
            >
              <img src={slide.image} alt={slide.alt} className="carousel-image" />
              <div className="carousel-text-overlay">
                <h3 className="carousel-title">{slide.title}</h3>
                <p className="carousel-description">{slide.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {isMobile && (
        <div className="carousel-dots" role="tablist">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === current ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Gå til slide ${index + 1}`}
              role="tab"
              aria-selected={index === current}
            />
          ))}
        </div>
      )}
    </section>
  );
}
