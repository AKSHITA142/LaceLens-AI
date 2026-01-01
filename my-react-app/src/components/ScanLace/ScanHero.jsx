import { useState } from "react";
import "./ScanHero.css";

export default function ScanHero({ onFind }) {
  const [preview, setPreview] = useState(null);

  function handleUpload(e) {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  }

  return (
    <section className="scan-hero">
      {/* LEFT SIDE */}
      <div className="scan-left">
        <h2>Find Your Lace Instantly</h2>
        <p>Upload or scan your lace image to find similar designs</p>

        <label className="upload-box">
          {preview ? (
            <img src={preview} alt="Uploaded lace" />
          ) : (
            <span>📷 Upload / Scan Lace</span>
          )}
          <input type="file" accept="image/*" onChange={handleUpload} hidden />
        </label>

        <button className="find-btn" onClick={onFind}>Find Similar Laces</button>
      </div>

      {/* RIGHT SIDE */}
     
    </section>
  );
}


