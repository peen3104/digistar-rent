export default function PricelistModal({ camera, onClose }) {
  if (!camera) return null

  return (
    <div className="result-modal-backdrop" onClick={onClose}>
      <div className="result-modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="result-modal-close" onClick={onClose} aria-label="Tutup">
          <i className="bi bi-x-lg"></i>
        </button>

        <h5 className="fw-bold mb-1">{camera.name}</h5>
        <p className="text-secondary small mb-4">
          Daftar harga sewa kamera ini 💰
        </p>

        <div className="pricelist-photo">
          <img
            src={camera.pricelist}
            alt={`Pricelist ${camera.name}`}
            onError={(e) => {
              e.target.onerror = null
              e.target.src = '/pricelist/placeholder.jpg'
            }}
          />
        </div>
      </div>
    </div>
  )
}