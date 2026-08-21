export default function Navbar() {
  const letters = [
    { char: 'D', bg: 'var(--pink-vivid)', color: '#fff' },
    { char: 'I', bg: 'var(--mint-vivid)', color: '#fff' },
    { char: 'G', bg: 'var(--sky-vivid)', color: '#fff' },
    { char: 'I', bg: 'var(--peach-vivid)', color: '#fff' },
    { char: 'S', bg: 'var(--yellow-vivid)', color: 'var(--ink)' },
    { char: 'T', bg: 'var(--pink-vivid)', color: '#fff' },
    { char: 'A', bg: 'var(--sky-vivid)', color: '#fff' },
    { char: 'R', bg: 'var(--mint-vivid)', color: '#fff' },
  ]

  return (
    <nav className="navbar navbar-expand-lg klikku-navbar sticky-top">
      <div className="container">
        <a className="klikku-logo navbar-brand d-flex align-items-center gap-2" href="#home">
          <img src="/logo.png" alt="KLIKKU logo" className="klikku-logo-img" />
          <span className="klikku-logo-blocky">
            {letters.map((l, i) => (
              <span
                key={i}
                className="logo-letter"
                style={{ background: l.bg, color: l.color }}
              >
                {l.char}
              </span>
            ))}
          </span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#klikkuNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="klikkuNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            <li className="nav-item">
              <a className="nav-link" href="#home">Beranda</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#kamera">Kamera</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#cara-sewa">Cara Sewa</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#testimoni">Testimoni</a>
            </li>
            <li className="nav-item mt-2 mt-lg-0">
              <a href="#kontak" className="btn-cute btn-cute-primary btn-sm">
                Sewa Sekarang
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
