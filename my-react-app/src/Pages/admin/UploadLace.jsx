import { useState } from "react";

export default function UploadLace() {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
  e.preventDefault();

  if (!file) {
    alert("Please select an image first");
    return;
  }

  const formData = new FormData();
  formData.append("image", file);
  formData.append("name", name);

  try {
    const res = await fetch("http://localhost:8001/api/lace/upload", {
      method: "POST",
      body: formData,
    });

    console.log("STATUS:", res.status);

    const text = await res.text();   // 👈 IMPORTANT
    console.log("RAW RESPONSE:", text);

    const data = JSON.parse(text);
    setMessage(data.message || "No message from backend");

  } catch (err) {
    console.error("UPLOAD ERROR:", err);
    setMessage("Upload failed");
  }
}


  return (
    <div style={{ padding: "2rem" }}>
      <h1>Upload Lace</h1>

      <form onSubmit={handleSubmit}>
  <input
    type="text"
    placeholder="Lace Name"
    value={name}
    onChange={(e) => setName(e.target.value)}
  />

  <br /><br />

  <input
    type="file"
    accept="image/*"
    onChange={(e) => setFile(e.target.files[0])}
  />

  <br /><br />

  <button type="submit">Upload</button>
</form>


      {message && <p>{message}</p>}
    </div>
  );
}
