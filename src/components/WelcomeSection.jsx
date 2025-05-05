import "./WelcomeSection.css";

export default function WelcomeSection() {
  return (
    <section className="welcome-section" aria-labelledby="welcome-heading">
      <div className="welcome-content">
        <img
          src="/images/velkomst-hunde.jpg"
          alt="To hvide hunde ligger i en hundeseng"
          className="welcome-image"
        />

        <div className="welcome-text">
          <h2 id="welcome-heading">Velkommen til Cotonshoppen.dk</h2>
          <p>
            Alle lykkelige hundeejere husker spændingen og forventningen op til, at den lille, nye hvalp kom hjem til jeres hus den første gang!
          </p>
          <p>
            Uanset, om I allerede har en dejlig hund, eller netop nu går og tæller ned til dagen, hvor jeres lille hvalp kommer hjem, er vi stolte af at kunne hjælpe jer med alt, hvad I skal bruge.
          </p>
          <p>
            Hos Cotonshoppen.dk har vi samlet alt til hunde og hvalpe ét sted, for at gøre det hele endnu lettere for dig.
          </p>
          <p>
            Vi har Danmarks største udvalg af kvalitetstilbehør til hunde – uanset race, størrelse og alder. Hvorvidt du er "almindelig" hundeejer, opdrætter, udstiller, eller førstegangskøber, gør heller ikke spor – Vi har alt, hvad du har brug for!
          </p>
        </div>
      </div>
    </section>
  );
}

