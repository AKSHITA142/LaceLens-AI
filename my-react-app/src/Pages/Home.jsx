import "./Home.css";
import { useEffect, useState } from "react";

import slide1 from "../assets/images/slide1.jpg";
import slide2 from "../assets/images/slide2.jpg";
import slide3 from "../assets/images/slide3.jpg";

import ScanHero from "../components/ScanLace/ScanHero";
import ScanResults from "../components/ScanLace/ScanResults";

const slides = [slide1, slide2, slide3];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  // Slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // 🔥 BACKEND SEARCH CALL
  async function handleSearch(file) {
    setShowResults(true);
    setLoading(true);

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await fetch(
        "http://localhost:8001/api/lace/search?top_k=15",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      setResults(data);
    } catch (err) {
      console.error("Search failed", err);
      alert("Search failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-inner">

          <div className="hero-text">
            <ScanHero onSearch={handleSearch} />
          </div>

          <div className="hero-visual">
            <img
              src={slides[current]}
              alt="Lace preview"
              className="hero-slide"
            />
          </div>

        </div>
      </section>

      {/* RESULTS SECTION */}
      {showResults && (
        <ScanResults results={results} loading={loading} />
      )}
    </>
  );
}

