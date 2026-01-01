import "./Footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* BRAND */}
        <div className="footer-col brand">
          <h3>Sagaram Lace</h3>
          <p>
            Premium laces & trims crafted in Surat for couture,
            bridalwear, and celebrations.
          </p>
        </div>

        {/* COLLECTIONS */}
        <div className="footer-col">
          <h4>Collections</h4>
          <ul>
            <li>Laces</li>
            <li>Embroidery</li>
            <li>Zardosi</li>
            <li>Accessories</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h4>Contact</h4>
          <p>📍 Surat, India</p>
          <p>📞 +91 XXXXX XXXXX</p>
          <p>✉ info@sagaramlace.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Sagaram Lace. All rights reserved.
      </div>
    </footer>
  )
}
