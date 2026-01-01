import { useState } from "react";
import ScanHero from "./ScanHero";
import ScanResults from "./ScanResults";
import "./ScanLace.css";

export default function ScanLace() {
  const [showResults, setShowResults] = useState(false);

  return (
    <>
      <ScanHero onFind={() => setShowResults(true)} />

      {/* RESULTS APPEAR BELOW — HERO NEVER MOVES */}
      {showResults && <ScanResults />}
    </>
  );
}
