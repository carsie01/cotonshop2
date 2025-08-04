import { useState } from "react";
import "./InfoAccordionSection.css";

const infos = [
  {
    id: 1,
    title: "Hvalpetilbehør til din første hund",
    icon: "🐾",
    content: `Har du det, du skal bruge til den lille hvalp?

Det vigtigste for små hunde, er masser af kærlighed, men samtidig har de også brug for noget udstyr, som hundetegn, hundekurv, madskåle, godbidder, legetøj, foder, børster osv.

Hos Cotonshoppen.dk tilbyder vi alt dette, og meget mere – vi er specialister i små hvalpe!`,
  },
  {
    id: 2,
    title: "Kæmpe sortiment af hundetilbehør",
    icon: "🐾",
    content: `Det er fantastisk at give sin hund noget nyt legetøj, en blød hundekurv, eller skræddersyet hundefoder og godbidder.

Hos Cotonshoppen.dk ønsker vi kun at handle med kvalitetsprodukter. Vi er løbende i dialog med både producenter og leverandører, for at sikre dig den rigtige kvalitet til den rigtige pris – uden du behøver at gå på kompromis.`,
  },
  {
    id: 3,
    title: "Du kan trygt handle hundeudstyr hos os",
    icon: "🐾",
    content: `Du kan trygt handle i Cotonshoppens onlineshop.

Vi er naturligvis medlem af E-mærket, og du kan betale med de fleste betalingskort via sikker forbindelse gennem NETS. Vil du hellere betale med MobilePay, er dette også muligt.`,
  },
  {
    id: 4,
    title: "Vi er specialister i hundeartikler & pelspleje",
    icon: "🐾",
    content: `Vi har stort set alt inden for hundeverdenen, og vores varesortiment udvider sig hele tiden. Du kan finde tilbehør til hunde til gode priser – og ofte rigtig gode tilbud!

Er der noget, du ikke kan finde i webshoppen, eller mener vi mangler, er du velkommen til at sende os en mail – så lover vi dig at gøre alt, hvad vi kan for at skaffe det.`,
  },
  {
    id: 5,
    title: "Vores service er i top",
    icon: "🐾",
    content: `Vi ved, hvor vigtig din hund er for dig, og derfor er det meget vigtigt for os, at du er tilfreds med den service og betjening, du får hos os.

Hos os har du altid 60 dages fuld returret samt 24 måneders reklamationsret på alle varer.`,
  },
  {
    id: 6,
    title: "Vi giver hurtig levering af hundeudstyr",
    icon: "🐾",
    content: `Alle ordrer sendes med GLS fra kun 39 kr.

Vi tilbyder levering både til pakkeshop, erhverv eller hjem til din hoveddør. Vi lover hurtig levering, og arbejder altid på at få din ordre hurtigt ud til dig.`,
  },
];

export default function InfoAccordionSection() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="info-section" aria-label="Information om Cotonshoppen">
      <div className="info-grid">
      {infos.map((item) => (
  <div key={item.id} className={`info-box ${openId === item.id ? "open" : ""}`}>

            <button
                className={`info-toggle ${openId === item.id ? "open" : ""}`}
                onClick={() => toggle(item.id)}
                aria-expanded={openId === item.id}
                aria-controls={`panel-${item.id}`}
                id={`btn-${item.id}`}
              >
                <span className="info-title">{item.title}</span>
                <span className="info-arrow" aria-hidden="true"
               >
                  {openId === item.id ? "▾" : "▸"}
                </span>
            </button>

            {openId === item.id && (
              <div
                id={`panel-${item.id}`}
                className="info-content"
                role="region"
                aria-labelledby={`btn-${item.id}`}
              >
                {item.content.split("\n").map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
