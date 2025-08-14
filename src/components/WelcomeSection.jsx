import "./WelcomeSection.css";

export default function WelcomeSection({ title, products }) {
  return (
    <section className="welcome-section" aria-labelledby="welcome-heading">
      <div className="welcome-content">
        <img
          src="/images/velkomst-hunde.jpg"
          alt="Christina på stranden sammen med sally og madonna"
          className="welcome-image"
        />

        <div className="welcome-text">
        <h2 className="section-title">{title}</h2>
          <p>
          Cotonshoppen blev grundlagt i 2008 af ægteparret Christina og Ole som en lille hobbyvirksomhed - drevet af deres fælles passion for hunde.
          </p>
          <br></br>
          <p>
          Christina har altid haft en særlig kærlighed til racen Coton de Tulear, som hun har haft gennem mange år og deltaget i udstillinger med. Det var netop hendes passion for racen, der blev den primære drivkraft bag etableringen af Cotonshoppen.
          </p>
          <br></br>
          <p>
          I dag er Cotonshoppen vokset til en specialiseret forretning med fokus på kvalitetsprodukter til hunde – men inspirationen bag forbliver den samme. Parrets to hunde, Sally og Madonna, spiller fortsat en vigtig rolle i virksomheden. De er med på kontoret hver dag, hvor de tester nye produkter og bidrager med indhold til virksomhedens medier og kommunikation.
          </p>
        </div>
      </div>
    </section>
  );
}

