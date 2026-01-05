import { useState } from "react";
import "./ScanHero.css";

export default function ScanHero({ onSearch }) {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  function handleUpload(e) {
    const selected = e.target.files[0];
    if (!selected) return;

    setFile(selected);
    setPreview(URL.createObjectURL(selected));
  }

  function handleFind() {
    if (!file) {
      alert("Please upload an image first");
      return;
    }
    onSearch(file); // 🔥 send image to parent
  }

  return (
    <section className="scan-hero">
      <div className="scan-left">
        <h2>Find Your Lace Instantly</h2>
        <p>Upload or scan your lace image to find similar designs</p>

        <label className="upload-box">
          {preview ? (
            <img src={preview} alt="Uploaded lace" />
          ) : (
            <span>📷 Upload / Scan Lace</span>
          )}
          <input type="file" accept="image/*" hidden onChange={handleUpload} />
        </label>

        <button className="find-btn" onClick={handleFind}>
          Find Similar Laces
        </button>
      </div>
    </section>
  );
}
