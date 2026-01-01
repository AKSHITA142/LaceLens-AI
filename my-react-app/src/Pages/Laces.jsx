import TwoColumnHero from "../components/layouts/TwoColumnHero"
import "./Home.css";
export default function Laces() {
  return (
    <TwoColumnHero
      title="Laces"
      subtitle="Explore our premium lace collections"
      right={
        <div className="lace-visual">
          {/* placeholder visual */}
        </div>
      }
    />
  )
}
