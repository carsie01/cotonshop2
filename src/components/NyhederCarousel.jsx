import { useEffect, useState, useRef } from "react";
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
    alt: "billede af nyhedsbanner. Spar 10 procent på nyheder og nye farver i en dusty army grøn og en mat gul, fra dog copenhagen.",
    link: "/dogcopenhagen",
    text: "FIND DEM HER",
  },
];

export default function NyhederCarousel() {
  const [current, setCurrent] = useState(0);
  const [userFocused, setUserFocused] = useState(false);
  const [liveMessage, setLiveMessage] = useState("");
  const navigate = useNavigate();
  const intervalRef = useRef(null);

  const nextSlide = () => {
    const nextIndex = (current + 1) % slides.length;
    setCurrent(nextIndex);
    setLiveMessage(`${slides[nextIndex].alt} ${slides[nextIndex].text}`);
  };

  useEffect(() => {
    if (!userFocused) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, 6000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [current, userFocused]);

  const goToSlide = (index) => {
    setCurrent(index);
    setLiveMessage(`${slides[index].alt} ${slides[index].text}`);
  };

  return (
    <section
      className="carousel-container"
      aria-label="Nyheder karusel"
      aria-describedby="carousel-desc"
      onFocus={() => setUserFocused(true)}
      onBlur={() => setUserFocused(false)}
    >
      <h1 className="sr-only">Velkommen til Cotonshoppen.dk</h1>
      <p className="sr-only" id="carousel-desc">
        Karusel med nyheder. Skifter automatisk hvert 6. sekund. Brug Tab for at navigere til knapperne.
      </p>

      <div className="carousel-wrapper">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              className="carousel-slide"
              key={slide.id}
              aria-hidden={current !== index}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} af ${slides.length}: ${slide.alt} ${slide.text}`}
            >
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

       
        {userFocused && (
          <div
            aria-live="polite"
            aria-atomic="true"
            role="status"
            className="sr-only"
            id="carousel-announcer"
          >
            {liveMessage && (
              <>
                <img
                  src={slides[current].image}
                  alt={slides[current].alt}
                  style={{ display: "none" }}
                />
                <span>{slides[current].text}</span>
              </>
            )}
          </div>
        )}

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
