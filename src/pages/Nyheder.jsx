import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Nyheder() {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const produkter = [
    {
      id: "nyh1",
      name: "Reflekshalsbånd",
      image: "/images/nyhed1.jpg",
      brand: "Ollipet",
      price: "89 kr",
      alt: "Reflekshalsbånd til små hunde",
    },
    {
      id: "nyh2",
      name: "Hundesko til vinter",
      image: "/images/nyhed2.jpg",
      brand: "DogFeet",
      price: "199 kr",
      alt: "Skridsikre hundesko",
    },
    {
      id: "nyh3",
      name: "Køletæppe",
      image: "/images/nyhed3.jpg",
      brand: "CoolDog",
      price: "149 kr",
      alt: "Blåt køletæppe til varme dage",
    },
  ];

  return (
    <main className="nyheder-side">
      <h1>Nyheder</h1>
      <p>Se vores nyeste produkter og tilføjelser her:</p>

      <div className="nyheder-grid">
        {produkter.map((produkt) => (
          <div
            key={produkt.id}
            className="produktkort"
            onClick={() => navigate(`/produkt/${produkt.id}`)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) =>
              e.key === "Enter" && navigate(`/produkt/${produkt.id}`)
            }
          >
            <img src={produkt.image} alt={produkt.alt} />
            <p className="brand">{produkt.brand}</p>
            <h3>{produkt.name}</h3>
            <p>{produkt.price}</p>
            <button
              className="add-to-cart"
              onClick={(e) => {
                e.stopPropagation();
                addToCart(produkt);
              }}
            >
              Læg i kurv
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
