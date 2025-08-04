import "./Footer.css";
import { FaFacebookF, FaInstagram, FaPinterestP, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer" aria-label="Sidefod">
      {/* Sociale medier */}
      <div className="footer-social">
        <p>Følg med på vores sociale medier</p>
        <nav aria-label="Sociale medier">
          <ul className="social-icons">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
                <FaPinterestP />
              </a>
            </li>
            <li>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <FaTiktok />
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Nyhedsbrev */}
      <section className="footer-newsletter" aria-labelledby="newsletter-heading">
        <h2 id="newsletter-heading">Hold øje med vores nyheder</h2>
        <form
          onSubmit={(e) => e.preventDefault()}
          aria-describedby="newsletter-desc"
        >
          <p id="newsletter-desc" className="visually-hidden">
            Tilmeld dig nyhedsbrevet ved at indtaste navn og e-mail.
          </p>
          <label htmlFor="newsletter-name" className="visually-hidden">Navn</label>
          <input id="newsletter-name" type="text" placeholder="Navn" required />

          <label htmlFor="newsletter-email" className="visually-hidden">Email</label>
          <input id="newsletter-email" type="email" placeholder="Email" required />

          <button type="submit">Tilmeld</button>
        </form>
      </section>

      {/* Nyttige guides */}
      <section className="footer-guides" aria-labelledby="guides-heading">
        <h2 id="guides-heading">Nyttige guides</h2>
        <div className="guides-grid">
          <a href="/guide1" aria-label="Se guide om valg af hundekurv">
            <img src="/images/guide1.jpg" alt="Hund i kurv - guide 1" />
          </a>
          <a href="/guide2" aria-label="Se guide om hvalpepleje">
            <img src="/images/guide2.jpg" alt="Hund kigger op - guide 2" />
          </a>
          <a href="/guide3" aria-label="Se guide om hundefoder">
            <img src="/images/guide3.jpg" alt="Hund med skål - guide 3" />
          </a>
        </div>
      </section>

      {/* Infobar */}
      <section className="footer-infobar" aria-label="Kundefordele">
        <div>🚚 Hurtig levering</div>
        <div>📦 Fri fragt over 499 kr</div>
        <div>⭐ 9.8 på Trustpilot</div>
        <div>🔁 60 dages returret</div>
      </section>

      {/* Links og information */}
      <section className="footer-top container" aria-labelledby="footer-nav-heading">
        <h2 id="footer-nav-heading" className="visually-hidden">Navigation og kontakt</h2>

        <div className="footer-col">
          <h3>Følg os</h3>
          <ul>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">Pinterest</a></li>
            <li><a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">TikTok</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Kontakt os</h3>
          <address>
            <strong>Hej@cotonshoppen.dk</strong><br />
            CBM Trading ApS<br />
            Ørvadsvej 55B<br />
            8220 Brabrand<br />
            CVR: 37821845
          </address>
        </div>

        <div className="footer-col">
          <h3>Servicevilkår</h3>
          <ul>
            <li><a href="#">FAQ / Ofte stillede spørgsmål</a></li>
            <li><a href="#">Betingelser & persondatapolitik</a></li>
            <li><a href="#">Returnering & ombytning</a></li>
            <li><a href="#">Afhentning af ordrer</a></li>
            <li><a href="#">Fortrydelsesret</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Information</h3>
          <ul>
            <li><a href="#">Hundeguides</a></li>
            <li><a href="#">Om Cotonshoppen</a></li>
            <li><a href="#">Ambassadører</a></li>
            <li><a href="#">Job hos os</a></li>
            <li><a href="#">Happy Dog Days</a></li>
            <li><a href="#">Nyhedsbrev</a></li>
          </ul>
        </div>
      </section>

      {/* Badges og certifikater */}
      <section className="footer-bottom container" aria-label="Certificeringer og sikkerhed">
        <div className="trust-section">
          <p><strong>Fremragende</strong></p>
          <img src="/images/stars-5.png" alt="Trustpilot 5 stjerner" />
        </div>
        <div className="cert-section">
          <img src="/images/emærket.png" alt="E-mærket webshop" />
          <img src="/images/payment.png" alt="Betalingsikoner" />
          <img src="/images/vet.png" alt="Registreret webshop" />
          <img src="/images/co2.png" alt="CO2 neutralt website" />
        </div>
      </section>
    </footer>
  );
}
