// src/components/AddToCartModal.jsx
import { useEffect } from "react";
import "./AddToCartModal.css";

export default function AddToCartModal({ product, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!product) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>{product.name} er lagt i kurven</h2>
        <div className="modal-buttons">
          <button onClick={() => window.location.href = "/kurv"}>Se kurv</button>
          <button onClick={onClose}>Shop videre</button>
          <button>Relaterede produkter</button> {/* evt. dynamisk senere */}
        </div>
      </div>
    </div>
  );
}

