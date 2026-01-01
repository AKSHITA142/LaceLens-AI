import "./ScanResults.css";
import ProductCard from "../ProductCards/ProductCard";
import Mirror1 from "../../assets/MirrorImage/Mirror1.jpg";
import Mirror2 from "../../assets/MirrorImage/Mirror2.jpg";
import Mirror3 from "../../assets/MirrorImage/Mirror3.avif";
import Mirror4 from "../../assets/MirrorImage/Mirror4.jpg";

// MOCK DATA (later AI will replace this)
const mockResults = [
  {
    title: "Mirror Lace",
    image: Mirror1,
    slug: "mirror-1",
  },
  {
    title: "Mirror Lace",
    image: Mirror2,
    slug: "mirror-2",
  },
  {
    title: "Mirror Lace",
    image: Mirror3,
    slug: "mirror-3",
  },
  {
    title: "Mirror Lace",
    image: Mirror4,
    slug: "mirror-4",
  },
];

export default function ScanResults() {
  return (
    <section className="scan-results">
      <h2>Similar Laces Found</h2>

      <div className="scan-results-grid">
        {mockResults.map((item, i) => (
          <ProductCard
            key={i}
            title={item.title}
            image={item.image}
            slug={item.slug}
          />
        ))}
      </div>
    </section>
  );
}
