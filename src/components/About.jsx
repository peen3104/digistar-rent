const points = [
  {
    icon: 'bi-shield-check',
    bg: 'var(--mint)',
    title: 'Kamera Terawat',
    desc: 'Semua unit dicek & dibersihin sebelum dan sesudah disewa.',
  },
  {
    icon: 'bi-clock',
    bg: 'var(--sky)',
    title: 'Sewa Fleksibel',
    desc: 'Mulai dari harian sampai mingguan, tinggal pilih sesuai kebutuhan.',
  },
  {
    icon: 'bi-emoji-smile',
    bg: 'var(--peach)',
    title: 'Ramah Pemula',
    desc: 'Dapet panduan pakai kamera, jadi tetep gampang walau baru pertama coba.',
  },
]

export default function About() {
  return (
    <section id="tentang" className="section-lavender">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-5">
            <span className="section-eyebrow bg-peach-eyebrow">Tentang DIGISTAR</span>
            <h2 className="mb-3">Dibuat buat kamu yang kangen rasanya motret pakai digicam</h2>
            <p className="text-secondary">
              DIGISTAR lahir dari kecintaan sama estetika foto digicam 2000-an.
              Kami sewain kamera digital jadul dalam kondisi terbaik, biar kamu
              bisa dapetin hasil foto yang khas — grainy, warm, dan penuh cerita.
            </p>
          </div>

          <div className="col-lg-7">
            <div className="row g-4">
              {points.map((p, i) => (
                <div className="col-md-4" key={i}>
                  <div className="about-icon-card">
                    <div className="about-icon-circle" style={{ background: p.bg }}>
                      <i className={`bi ${p.icon}`}></i>
                    </div>
                    <h6 className="fw-bold mb-2">{p.title}</h6>
                    <small className="text-secondary">{p.desc}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
