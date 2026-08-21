import { useState } from 'react'
import ResultModal from './ResultModal'
import PricelistModal from './PricelistModal'

const categories = [
  { key: 'semua', label: 'Semua' },
  { key: 'selatan', label: 'Jakarta Selatan' },
  { key: 'barat', label: 'Jakarta Barat' },
  { key: 'tangerang', label: 'Tangerang' },
]

const cameras = [
  {
    slug: 'canon-ixus105',
    name: 'Canon Ixus 105',
    category: 'selatan',
    hit: true,
    results: ['/results/canon-ixus105/1.jpg', '/results/canon-ixus105/2.jpg', '/results/canon-ixus105/3.jpg', '/results/canon-ixus105/4.jpg'],
    pricelist: '/pricelists/pl-ixus.jpg',
  },
  {
    slug: 'canon-a2600',
    name: 'Canon Powershot A2600',
    category: 'selatan',
    hit: true,
    results: ['/results/canon-a2600/1.jpg', '/results/canon-a2600/2.jpg', '/results/canon-a2600/3.jpg', '/results/canon-a2600/4.jpg'],
    pricelist: '/pricelists/pl-powershot12600.jpg',
  },
  {
    slug: 'nikon-s3600',
    name: 'Nikon Coolpix S3600',
    category: 'selatan',
    hit: false,
    results: ['/results/nikon-s3600/1.jpg', '/results/nikon-s3600/2.jpg', '/results/nikon-s3600/3.jpg', '/results/nikon-s3600/4.jpg'],
    pricelist: '/pricelists/pl-s3600.jpg',
  },
  {
    slug: 'sony-w810',
    name: 'Sony Cybershot W810',
    category: 'selatan',
    hit: false,
    results: ['/results/sony-w810/1.jpg', '/results/sony-w810/2.jpg', '/results/sony-w810/3.jpg', '/results/sony-w810/4.jpg'],
    pricelist: '/pricelists/pl-w810.jpg',
  },
  {
    slug: 'canon-a2500red',
    name: 'Canon Powershot A2500 (Red)',
    category: 'barat',
    hit: false,
    results: ['/results/canon-a2500red/1.jpg', '/results/canon-a2500red/2.jpg', '/results/canon-a2500red/3.jpg', '/results/canon-a2500red/4.jpg'],
    pricelist: '/pricelists/pl-a2500red.jpg',
  },
  {
    slug: 'canon-a2500silver',
    name: 'Canon Powershot A2500 (Silver)',
    category: 'barat',
    hit: false,
    results: ['/results/canon-a2500silver/1.jpg', '/results/canon-a2500silver/2.jpg', '/results/canon-a2500silver/3.jpg', '/results/canon-a2500silver/4.jpg'],
    pricelist: '/pricelists/pl-a2500silver.jpg',
  },
  {
    slug: 'fujifilm-finepix',
    name: 'Fujifilm Finepix',
    category: 'barat',
    hit: false,
    results: ['/results/fujifilm-finepix/1.jpg', '/results/fujifilm-finepix/2.jpg', '/results/fujifilm-finepix/3.jpg', '/results/fujifilm-finepix/4.jpg'],
    pricelist: '/pricelists/pl-fujifilm.jpg',
  },
  {
    slug: 'nikon-coolpixs2500',
    name: 'Nikon Coolpix S2500',
    category: 'barat',
    hit: false,
    results: ['/resultsnikon-coolpixs2500/1.jpg', '/results/nikon-coolpixs2500/2.jpg', '/results/nikon-coolpixs2500/3.jpg', '/results/nikon-coolpixs2500/4.jpg'],
    pricelist: '/pricelists/pl-coolpix.jpg',
  },
  {
    slug: 'canon-ixus105',
    name: 'Canon Ixus 105',
    category: 'tangerang',
    hit: true,
    results: ['/results/canon-ixus105/1.jpg', '/results/canon-ixus105/2.jpg', '/results/canon-ixus105/3.jpg', '/results/canon-ixus105/4.jpg'],
    pricelist: '/pricelists/pl-ixus.jpg',
  },
  {
    slug: 'coolpix-s330',
    name: 'Nikon Coolpix S330',
    category: 'tangerang',
    hit: false,
    results: ['/results/coolpix-s330/1.jpg', '/results/coolpix-s330/2.jpg', '/results/coolpix-s330/3.jpg', '/results/coolpix-s330/4.jpg'],
    pricelist: '/pricelists/pl-s330.jpg',
  },
  {
    slug: 'ixus-160',
    name: 'Canon Ixus 160',
    category: 'tangerang',
    hit: true,
    results: ['/results/ixus-160/1.jpg', '/results/ixus-160/2.jpg', '/results/ixus-160/3.jpg', '/results/ixus-160/4.jpg'],
    pricelist: '/pricelists/pl-ixus160.jpg',
  },
  {
    slug: 'sony-w810',
    name: 'Sony Cybershot W810',
    category: 'tangerang',
    hit: false,
    results: ['/results/sony-w810/1.jpg', '/results/sony-w810/2.jpg', '/results/sony-w810/3.jpg', '/results/sony-w810/4.jpg'],
    pricelist: '/pricelists/pl-w810tgr.jpg',
  },
]

export default function Packages() {
  const [activeTab, setActiveTab] = useState('semua')
  const [activeCamera, setActiveCamera] = useState(null)
  const [activePricelist, setActivePricelist] = useState(null)

  const filtered = cameras.filter(
    (cam) => activeTab === 'semua' || cam.category === activeTab
  )

  return (
    <section id="kamera" className="section-cream">
      <div className="container">
        <div className="text-center mb-4">
          <span className="section-eyebrow bg-mint-eyebrow">Koleksi Kami</span>
          <h2>Pilih Digicam Favoritmu</h2>
          <p className="text-secondary">Cek pricelist & hasil jepretannya, terus tinggal chat kita ya ✨</p>
        </div>

        <div className="category-tabs mb-5">
          {categories.map((cat) => (
            <button
              key={cat.key}
              className={`tab-pill ${activeTab === cat.key ? 'tab-pill-active' : ''}`}
              onClick={() => setActiveTab(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {filtered.map((cam, i) => (
            <div className="col" key={`${cam.slug}-${cam.category}-${i}`}>
              <div className="camera-card">
                <div className="camera-card-thumb">
                  <img
                    src={`/cameras/${cam.slug}.jpg`}
                    alt={cam.name}
                    onError={(e) => {
                      e.target.onerror = null
                      e.target.src = '/cameras/placeholder.jpg'
                    }}
                  />
                  <span className="heart-icon">
                    <i className="bi bi-heart"></i>
                  </span>
                  {cam.hit && <span className="hit-badge">HIT</span>}
                </div>

                <div className="camera-card-body">
                  <div className="camera-name-pill">
                    <span>{cam.name}</span>
                  </div>

                  <div className="d-flex gap-2 mt-3">
                    <button
                      className="btn-cute btn-cute-primary btn-sm flex-fill justify-content-center"
                      onClick={() => setActivePricelist(cam)}
                    >
                      Pricelist
                    </button>
                    <button
                      className="btn-cute btn-cute-outline btn-sm flex-fill justify-content-center"
                      onClick={() => setActiveCamera(cam)}
                    >
                      Lihat Hasil
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ResultModal camera={activeCamera} onClose={() => setActiveCamera(null)} />
      <PricelistModal camera={activePricelist} onClose={() => setActivePricelist(null)} />
    </section>
  )
}