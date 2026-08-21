export default function Hero() {
  return (
    <>
      <header id="home" className="hero-section section-cream">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <span className="section-eyebrow bg-pink-eyebrow">
                📸 Digicam Rental Jakarta
              </span>
              <h1 className="hero-heading mb-3">
                Sewa Kamera Digicam, Bikin Kenangan Estetik ala Y2K
              </h1>
              <p className="hero-sub mb-4">
                Koleksi kamera digital jadul yang udah dicek satu-satu,
                siap nemenin trip, ulang tahun, sampai hunting foto random
                bareng temen-temen kamu.
              </p>

              <div className="d-flex flex-wrap gap-3 mb-4">
                <a href="#kontak" className="btn-cute btn-cute-primary">
                  <i className="bi bi-whatsapp"></i> Booking Sekarang
                </a>
                <a href="#kamera" className="btn-cute btn-cute-outline">
                  Lihat Katalog
                </a>
              </div>

              <div className="d-flex flex-wrap gap-4">
                <div>
                  <div className="hero-stat fs-4">10+</div>
                  <small className="text-secondary">Pilihan Kamera</small>
                </div>
                <div>
                  <div className="hero-stat fs-4">50+</div>
                  <small className="text-secondary">Sewa Berhasil</small>
                </div>
                <div>
                  <div className="hero-stat fs-4">4.9★</div>
                  <small className="text-secondary">Rating Pelanggan</small>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="hero-visual">
                <span
                  className="sticker-badge"
                  style={{ top: '10px', left: '10px', background: 'var(--mint)' }}
                >
                  🌸 anti mainstream!
                </span>

                <span
                  className="sticker-badge"
                  style={{ top: '10px', right: '10px', background: 'var(--sky)', transform: 'rotate(8deg)' }}
                >
                  🎞️ full vibes only!
                </span>

                <div className="camera-stage">
                  <img src="/camera-hero.png" alt="" className="camera-ghost ghost-3" />
                  <img src="/camera-hero.png" alt="" className="camera-ghost ghost-2" />
                  <img src="/camera-hero.png" alt="" className="camera-ghost ghost-1" />
                  <img src="/camera-hero.png" alt="Kamera KLIKKU" className="camera-main" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Signature marquee band, terinspirasi dari moodboard */}
      <div className="marquee-band">
        <div className="marquee-track">
          <span>DIGISTAR</span>
          <span>•</span>
          <span>RETRO VIBES</span>
          <span>•</span>
          <span>Y2K MOOD</span>
          <span>•</span>
          <span>ABADIKAN MOMEN</span>
          <span>•</span>
          <span>DIGISTAR</span>
          <span>•</span>
          <span>RETRO VIBES</span>
          <span>•</span>
          <span>Y2K MOOD</span>
          <span>•</span>
          <span>ABADIKAN MOMEN</span>
          <span>•</span>
        </div>
      </div>
    </>
  )
}
