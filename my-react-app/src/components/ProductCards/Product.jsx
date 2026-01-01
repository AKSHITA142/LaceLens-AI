import ProductCard from "./ProductCard";
import "./Product.css";
import Mirror1 from "../../assets/MirrorImage/Mirror1.jpg";
import Gota1 from "../../assets/GotaImage/Gota1.jpg";
import Latkan1 from "../../assets/Latkan/Latkan1.jpeg";
import Pumpum1 from "../../assets/Pumpum/Pumpum1.jpeg";
import Dori1 from "../../assets/Dori/Dori1.jpeg";
import Cotton1 from "../../assets/Cotton/Cotton1.jpeg";
import Embro1 from "../../assets/Embroidary/Embro1.jpeg";
import Setwise1 from "../../assets/Setwise/Setwise1.jpeg";
import Crosia1 from "../../assets/Crosiya/Crosia1.jpeg";
import Tissue1 from "../../assets/Tissue/Tissue1.jpeg";
import Gpo1 from "../../assets/GPO/GPO1.jpeg";
import Jalar1 from "../../assets/Jalar/JALAR1.jpeg";

const categories = [
  {
    title: "Mirror Laces Collection",
    image: Mirror1,
    slug: "1",
  },
  {
    title: "Gota Lace Collection",
    image: Gota1,
    slug: "2",
  },
  {
    title: "Handwork Latkan Lace",
    image: Latkan1,
    slug: "3",
  },
  {
    title: "Pumpum Cotton Lace",
    image: Pumpum1,
    slug: "4",
  },
  {
    title: "Dori",
    image: Dori1,
    slug: "5",
  },
  {
    title: "Cotton Lace",
    image: Cotton1,
    slug: "6",
  },
  {
    title: "Embroidery Lace",
    image: Embro1,
    slug: "7",
  },
  {
    title: "Setwise Packing Lace",
    image: Setwise1,
    slug: "8",
  },
  {
    title: "Crosiya Lace",
    image: Crosia1,
    slug: "9",
  },
  {
    title: "Embroidery Tissue Neck",
    image: Tissue1,
    slug: "10",
  },
  {
    title: "Gpo Lace",
    image: Gpo1,
    slug: "11",
  },
  {
    title: "Jalar Lace",
    image: Jalar1,
    slug: "12",
  },
];

export default function Products() {
  return (
    <section className="product-section">
      <h2 style={{textAlign:"center"}}>Our Collections</h2>

      <div className="products-grid">
        {categories.map((cat) => (
          <ProductCard key={cat.slug} {...cat} />
        ))}
      </div>
    </section>
  );
}