const admins = [
  { area: 'Jakarta Selatan', phone: '6285161243520', icon: 'bi-geo-alt' },
  { area: 'Jakarta Barat', phone: '6285771269765', icon: 'bi-geo-alt' },
  { area: 'Tangerang', phone: '6285177827891', icon: 'bi-geo-alt' },
]

export default function Contact() {
  return (
    <section id="kontak" className="section-cream">
      <div className="container">
        <div className="cta-section">
          <h2 className="mb-3" style={{ color: '#fff' }}>
            Yuk, Booking Kamera Kamu Sekarang!
          </h2>
          <p className="mb-4" style={{ color: '#fff', opacity: 0.9 }}>
            Pilih admin sesuai lokasi kamu buat cek ketersediaan & booking tanggal sewa.
          </p>

          <div className="row g-3 justify-content-center mb-4">
            {admins.map((admin, i) => (
              <div className="col-md-4" key={i}>
                <a href={`https://wa.me/${admin.phone}`} target="_blank" rel="noreferrer" className="btn-cute w-100 justify-content-center" style={{ background: '#fff', color: 'var(--pink)' }}>
                  <i className="bi bi-whatsapp"></i> Admin {admin.area}
                </a>
              </div>
            ))}
          </div>

          <a href="https://www.instagram.com/digistar.rent/" target="_blank" rel="noreferrer" className="btn-cute btn-cute-outline" style={{ borderColor: '#fff', color: '#fff' }}>
            <i className="bi bi-instagram"></i> @digistar.rent
          </a>
        </div>
      </div>
    </section>
  )
}