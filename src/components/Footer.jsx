export default function Footer() {
  return (
    <footer className="klikku-footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <h5 className="font-display" style={{ color: '#fff' }}>
              DIGISTAR<span style={{ color: 'var(--pink)' }}>.</span>
            </h5>
            <p className="small">
              Sewa kamera digicam estetik buat kenangan yang anti mainstream.
            </p>
          </div>

          <div className="col-md-4">
            <h6 className="mb-3" style={{ color: '#fff' }}>Navigasi</h6>
            <ul className="list-unstyled small d-flex flex-column gap-2">
              <li><a href="#home">Beranda</a></li>
              <li><a href="#kamera">Kamera</a></li>
              <li><a href="#cara-sewa">Cara Sewa</a></li>
              <li><a href="#testimoni">Testimoni</a></li>
            </ul>
          </div>

          <div className="col-md-4">
            <h6 className="mb-3" style={{ color: '#fff' }}>Kontak</h6>
            <ul className="list-unstyled small d-flex flex-column gap-2">
              <li>
                <i className="bi bi-whatsapp me-2"></i>
                <a href="#kontak">Chat Admin (Selatan / Barat / Tangerang)</a>
              </li>
              <li>
                <i className="bi bi-instagram me-2"></i>
                <a href="https://instagram.com/digistar.rent" target="_blank" rel="noreferrer">@digistar.rent</a>
              </li>
              <li><i className="bi bi-geo-alt me-2"></i>Jakarta Selatan • Jakarta Barat • Tangerang</li>
            </ul>
          </div>
        </div>

        <div className="footer-divider"></div>
        <p className="small text-center mb-0">
          © 2026 DIGISTAR. Made with 💌 buat kamu yang suka digicam.
        </p>
      </div>
    </footer>
  )
}