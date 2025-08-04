import { useState, useRef } from "react";
import { Link } from "react-router-dom";
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
  const [liveMessage, setLiveMessage] = useState("");
  const trackRef = useRef(null);
  const slideRefs = useRef([]);

  const goToSlide = (index) => {
    slideRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center", // midtstiller i stedet for start
    });
    setCurrent(index);
    setLiveMessage(`${slides[index].alt} ${slides[index].text}`);
  };

  const scrollTimeout = useRef(null);

const handleScroll = () => {
  if (scrollTimeout.current) {
    cancelAnimationFrame(scrollTimeout.current);
  }

  scrollTimeout.current = requestAnimationFrame(() => {
    const track = trackRef.current;
    if (!track || slideRefs.current.length === 0) return;

    const trackRect = track.getBoundingClientRect();
    const trackCenter = trackRect.left + trackRect.width / 2;

    let closestIndex = 0;
    let smallestDistance = Infinity;

    slideRefs.current.forEach((slide, index) => {
      if (!slide) return;
      const slideRect = slide.getBoundingClientRect();
      const slideCenter = slideRect.left + slideRect.width / 2;
      const distance = Math.abs(slideCenter - trackCenter);

      if (distance < smallestDistance) {
        smallestDistance = distance;
        closestIndex = index;
      }
    });

    setCurrent((prev) => {
      if (prev !== closestIndex) {
        setLiveMessage(`${slides[closestIndex].alt} ${slides[closestIndex].text}`);
        return closestIndex;
      }
      return prev;
    });
  });
};


  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    handleSwipeGesture();
  };

  const handleSwipeGesture = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const slideCount = slides.length;
    let newIndex = current;

    if (distance > 50 && current < slideCount - 1) {
      newIndex = current + 1;
    } else if (distance < -50 && current > 0) {
      newIndex = current - 1;
    }

    goToSlide(newIndex);
  };

  return (
    <section
      className="carousel-container"
      aria-label="Nyheder karusel"
      aria-describedby="carousel-desc"
    >
      <p className="sr-only" id="carousel-desc">
        Karusel med nyheder. Brug swipe eller prikkerne nedenfor for at skifte indhold.
      </p>

      <div
        className="carousel-wrapper"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="carousel-track"
          ref={trackRef}
          onScroll={handleScroll}
        >
          {slides.map((slide, index) => (
            <Link
              to={slide.link}
              key={slide.id}
              className="carousel-slide clickable-slide"
              aria-label={`Nyhed ${index + 1}: ${slide.alt}`}
              ref={(el) => (slideRefs.current[index] = el)}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="carousel-image"
              />
              <div className="carousel-button-overlay">{slide.text}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* Skærmlæser-besked */}
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

      {/* Navigation dots */}
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
    </section>
  );
}
