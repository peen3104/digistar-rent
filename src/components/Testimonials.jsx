const testimonials = [
  {
    name: 'Dinda',
    initial: 'D',
    bg: 'var(--pink)',
    text: 'Kameranya lucu banget hasilnya, jadi berasa foto tahun 2000-an. Prosesnya juga gampang!',
  },
  {
    name: 'Putri',
    initial: 'P',
    bg: 'var(--sky)',
    text: 'Sewa buat acara ulang tahun, kameranya bersih dan baterainya awet seharian.',
  },
  {
    name: 'Faiz',
    initial: 'F',
    bg: 'var(--peach)',
    text: 'Admin-nya responsif dan sabar jelasin cara pakainya, cocok buat pemula kayak aku.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimoni" className="section-lavender">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-eyebrow bg-pink-eyebrow">Kata Mereka</span>
          <h2>Cerita dari Penyewa DIGISTAR</h2>
        </div>

        <div className="row g-4">
          {testimonials.map((t, i) => (
            <div className="col-md-4" key={i}>
              <div className="testimonial-card">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="testimonial-avatar" style={{ background: t.bg }}>
                    {t.initial}
                  </div>
                  <div>
                    <h6 className="fw-bold mb-0">{t.name}</h6>
                    <small className="text-warning">★★★★★</small>
                  </div>
                </div>
                <p className="text-secondary small mb-0">"{t.text}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
