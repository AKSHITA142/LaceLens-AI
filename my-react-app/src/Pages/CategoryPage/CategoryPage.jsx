import { useParams } from "react-router-dom";
import { categoryData } from "../../components/data/category-Data";
import "./CategoryPage.css";

export default function CategoryPage() {
  const { slug } = useParams();
  const category = categoryData[slug];

  if (!category) {
    return <h2 style={{ padding: "4rem" }}>Category not found</h2>;
  }

  return (
    <section className="category-page">
      <h1>{category.title}</h1>

      <div className="category-grid">
        {category.images.map((img, index) => (
          <div key={index} className="category-item">
            <img src={img} alt={category.title} />
            <p>Buy</p>
          </div>
        ))}
      </div>
    </section>
  );
}
