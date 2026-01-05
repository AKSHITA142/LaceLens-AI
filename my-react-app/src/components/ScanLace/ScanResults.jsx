import "./ScanResults.css";
import ProductCard from "../ProductCards/ProductCard";

export default function ScanResults({ results, loading }) {
  return (
    <section className="scan-results">
      <h2>Similar Laces Found</h2>

      {loading && <p>Searching for similar laces...</p>}

      {!loading && results.length === 0 && (
        <p>No similar laces found.</p>
      )}

      <div className="scan-results-grid">
        {results.map((item) => (
          <ProductCard
            key={item.lace_id}
            title={`${item.name} (${item.similarity_percent}%)`}
            image={`http://localhost:8001/${item.image_path}`}
            slug={item.lace_id}
          />
        ))}
      </div>
    </section>
  );
}
