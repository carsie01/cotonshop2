import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./AddToCartModal.css";

export default function AddToCartModal({ product, onClose }) {
  const navigate = useNavigate();
  const modalRef = useRef(null);

  // Luk modal med ESC
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Sæt fokus i modal
  useEffect(() => {
    modalRef.current?.focus();
  }, []);

  if (!product) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
        ref={modalRef}
      >
        <h2 id="modal-title" className="modal-title">
          ✅ {product.name} er lagt i kurven
        </h2>
        <p className="modal-confirmation">
          Du kan nu <strong>shoppe videre</strong>, eller <strong>gå til kurven</strong> for at afslutte købet.
        </p>

        <div className="modal-buttons">
          <button onClick={() => navigate("/kurv")}>Se kurv</button>
          <button onClick={onClose}>Shop videre</button>
          <button disabled>Relaterede produkter</button>
        </div>
      </div>
    </div>
  );
}
