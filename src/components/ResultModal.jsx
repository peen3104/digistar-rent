export default function ResultModal({ camera, onClose }) {
  if (!camera) return null

  return (
    <div className="result-modal-backdrop" onClick={onClose}>
      <div className="result-modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="result-modal-close" onClick={onClose} aria-label="Tutup">
          <i className="bi bi-x-lg"></i>
        </button>

        <h5 className="fw-bold mb-1">{camera.name}</h5>
        <p className="text-secondary small mb-4">
          Contoh hasil jepretan pakai kamera ini 📸
        </p>

        <div className="row row-cols-2 g-3">
          {camera.results.map((src, i) => (
            <div className="col" key={i}>
              <div className="result-photo">
                <img
                  src={src}
                  alt={`Hasil foto ${camera.name} ${i + 1}`}
                  onError={(e) => {
                    e.target.onerror = null
                    e.target.src = '/results/placeholder.jpg'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}