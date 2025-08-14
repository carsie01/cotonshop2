import "./Footer.css";
import { FaFacebookF, FaInstagram, FaPinterestP, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer" aria-label="Sidefod">
      {/* Sociale medier */}
      <div className="footer-social">
        <p>Følg med på vores sociale medier</p>
        <div aria-label="Sociale medier">
          <ul className="social-icons">
            <li>
              <a href="https://www.facebook.com/cotonshoppen.dk?locale=da_DK" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/cotonshoppen.dk/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="https://dk.pinterest.com/Cotonshoppen/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
                <FaPinterestP />
              </a>
            </li>
            <li>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <FaTiktok />
              </a>
            </li>
          </ul>
        </div>
      </div>

      
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

      
      <section className="footer-guides" aria-labelledby="guides-heading">
  <h2 id="guides-heading">Nyttige guides</h2>
  
  <div className="guides-grid">
    <div className="guide-card">
      <a href="https://cotonshoppen.dk/information/diy-lav-selv-hundeis-1/" aria-label="Se guide om hvordan du laver dine egne hundeis">
        <img src="/images/hundeis.jpg" alt="Opfrifter til lækre hundeis til din bedste ven" />
      </a>
      <h3><a href="/guide1">Lav dine egne hundeis</a></h3>
    </div>

    <div className="guide-card">
      <a href="/guide2" aria-label="Se guide om hvad du skal bruge til din hvalp">
        <img src="/images/hundehvalp.jpg" alt="Se guiden til alt du skal bruge til din hvalp" />
      </a>
      <h3><a href="https://cotonshoppen.dk/information/hvad-skal-jeg-bruge-til-min-nye-hvalp/">Hvad skal du bruge til din nye hvalp?</a></h3>
    </div>

    <div className="guide-card">
      <a href="/guide3" aria-label="Se guide om hundetandpleje">
        <img src="/images/hundetandbørste.jpg" alt="Se den store guide til din hunds tandpleje" />
      </a>
      <h3><a href="https://cotonshoppen.dk/information/tandpleje-til-hunde-den-store-guide/#tab_page_general">Den store guide til tandpleje</a></h3>
    </div>
  </div>

  <div className="all-guides-button-wrapper">
    <a href="https://cotonshoppen.dk/information/hundeguides/" className="all-guides-button">Se alle guides</a>
  </div>
</section>




      
      
      <section className="footer-infobar" aria-label="Kundefordele">
  <div className="info-item">
    <img src="/images/truck.svg" alt="" aria-hidden="true" className="info-icon" />
    <span className="info-text">Hurtig levering</span>
  </div>
  <div className="info-item">
    <img src="/images/freeshipping.svg" alt="" aria-hidden="true" className="info-icon" />
    <span className="info-text">Fri fragt over 499 kr</span>
  </div>
  <div className="info-item">
    <img src="/images/star.svg" alt="" aria-hidden="true" className="info-icon" />
    <span className="info-text">9.8 på Trustpilot</span>
  </div>
  <div className="info-item">
    <img src="/images/rollback.svg" alt="" aria-hidden="true" className="info-icon" />
    <span className="info-text">60 dages returret</span>
  </div>
</section>
      

      
      <section className="footer-top container" >
        
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
          <h3>Følg os</h3>
          <ul className="social-iconss">
            <li>
              <a href="https://www.facebook.com/cotonshoppen.dk?locale=da_DK" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/cotonshoppen.dk/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="https://dk.pinterest.com/Cotonshoppen/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
                <FaPinterestP />
              </a>
            </li>
            <li>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <FaTiktok />
              </a>
            </li>
          </ul>
        </div>


        <div className="footer-col">
          <h3>Information</h3>
          <ul>
            <li><a href="https://cotonshoppen.dk/information/hundeguides/">Hundeguides</a></li>
            <li><a href="#">Om Cotonshoppen</a></li>
            <li><a href="#">Ambassadører</a></li>
            <li><a href="#">Job hos os</a></li>
            <li><a href="#">Happy Dog Days</a></li>
            <li><a href="#">Nyhedsbrev</a></li>
          </ul>
        </div>
      </section>

      
      <section className="footer-bottom container" aria-label="Certificeringer og sikkerhed">
        <div className="cert-section">
        <img src="/images/stars-5.png" alt="Trustpilot 5 stjerner" />
          <img src="/images/emærket.png" alt="E-mærket webshop" />
          <img src="/images/payment.png" alt="Betalingsikoner" />
          <img src="/images/vet.png" alt="Registreret webshop" />
          <img src="/images/co2.png" alt="CO2 neutralt website" />
        </div>
      </section>
    </footer>
  );
}
