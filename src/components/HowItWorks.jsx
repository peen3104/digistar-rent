const steps = [
  {
    num: '01',
    title: 'Pilih Kamera',
    desc: 'Cek katalog, pilih digicam yang cocok sama vibe kamu.',
  },
  {
    num: '02',
    title: 'Booking & Bayar DP',
    desc: 'Chat admin via WhatsApp, tentuin tanggal sewa, bayar DP buat kunci jadwal.',
  },
  {
    num: '03',
    title: 'Ambil & Foto-foto',
    desc: 'Ambil kameranya (bisa gosend, dll), terus tinggal foto-foto sepuasnya!',
  },
]

export default function HowItWorks() {
  return (
    <section id="cara-sewa" className="section-sky">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-eyebrow bg-sky-eyebrow">Cara Sewa</span>
          <h2>Cuma 3 Langkah, Gampang Banget</h2>
        </div>

        <div className="row g-4 text-center">
          {steps.map((s, i) => (
            <div className="col-md-4" key={i}>
              <div className="step-card">
                <div className="step-number mb-2">{s.num}</div>
                <h6 className="fw-bold">{s.title}</h6>
                <p className="text-secondary small mb-0">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
