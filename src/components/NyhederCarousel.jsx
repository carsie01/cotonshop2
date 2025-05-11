import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NyhederCarousel.css";

const slides = [
  {
    id: 1,
    image: "/images/nyhed1.jpg",
    alt: "billede af nyhedsbrev. Spar 10 procent på nye hundesenge og farver fra ollipet.",
    link: "/hundetilbehoer",
    text: "SE UDVALGET HER",
  },
  {
    id: 2,
    image: "/images/nyhed2.jpg",
    alt: "billede af nyhedsbanner. Mors dag, fejre det med forkælelse. Spar op til 30 procent på udvalgte varer.",
    link: "/tilbud",
    text: "SE HER",
  },
  {
    id: 3,
    image: "/images/nyhed3.jpg",
    alt: "billede af nyhedsbanner. Spar 10 procent på nyheder og nye faver i en dusty army grøn og en mat gul, fra dog copenhagen. ",
    link: "/dogcopenhagen",
    text: "FIND DEM HER",
  },
];

export default function NyhederCarousel() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <section className="carousel-container" aria-label="Nyheder karusel">
    <div className="carousel-wrapper">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div className="carousel-slide" key={slide.id}>
            <img
              src={slide.image}
              alt={slide.alt}
              className="carousel-image"
            />
            <button
              onClick={() => navigate(slide.link)}
              className="carousel-button"
            >
              {slide.text}
            </button>
          </div>
        ))}
      </div>
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
    </div>
  </section>
  );
}
