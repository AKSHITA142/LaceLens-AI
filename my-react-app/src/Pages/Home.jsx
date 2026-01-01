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
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
    <section className="hero">
      <div className="hero-inner">

        {/* LEFT TEXT */}
        <div className="hero-text">
          <ScanHero onFind={() => setShowResults(true)}/>
        </div>

        {/* RIGHT LARGE RECTANGLE */}
        <div className="hero-visual">
          <img
            src={slides[current]}
            alt="Lace preview"
            className="hero-slide"
          />
        </div>

      </div>
    </section>
      {/* RESULTS — BELOW HERO */}
      {showResults && <ScanResults />}
      </>
  );
}
