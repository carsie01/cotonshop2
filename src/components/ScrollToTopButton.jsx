import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300); // vises når man scroller ned
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className="scroll-top-btn"
      aria-label="Til toppen af siden"
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        padding: "12px 16px",
        fontSize: "18px",
        backgroundColor: "#0079c2",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 0.3s ease",
        zIndex: 1000,
      }}
    >
      ⬆️ Top
    </button>
  );
}
