import "./Footer.css";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer" aria-label="Sidefod">
      <div className="footer-top container">
      
        <div className="footer-col">
          <h3>Følg os</h3>
          <nav aria-label="Sociale medier">
            <ul className="social-icons">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebookF size={20} />
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <FaYoutube size={20} />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram size={20} />
                </a>
              </li>
            </ul>
          </nav>
        </div>

        
        <div className="footer-col">
          <h3>Kontakt os</h3>
          <p><strong>Hej@cotonshoppen.dk</strong></p>
          <p>
            CBM Trading ApS<br />
            Ørvadsvej 55B<br />
            8220 Brabrand
          </p>
          <p>CVR: 37821845</p>
        </div>

        
        <div className="footer-col">
          <h3>Servicevilkår</h3>
          <ul>
            <li><a href="#">FAQ / Ofte Stillede Spørgsmål</a></li>
            <li><a href="#">Betingelser, vilkår & persondatapolitik</a></li>
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
      </div>

      
      <div className="footer-bottom container">
        <div className="trust-section">
          <p><strong>Fremragende</strong></p>
          <img src="/images/stars-5.png" alt="Trustpilot 5 stjerner" />
        </div>
        <div className="cert-section">
          <img src="/images/emærket.png" alt="E-mærket webshop" />
          <img src="/images/payment.png" alt="Du kan betale med Dankort, visa, visa electron, mastarcard, maestro, american express, jcb og mobliepay" />
          <img src="/images/vet.png" alt="Lovligt registreret webshop" />
          <img src="/images/co2.png" alt="CO2 neutralt website" />
        </div>
      </div>
    </footer>
  );
}
