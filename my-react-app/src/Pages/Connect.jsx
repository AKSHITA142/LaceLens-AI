import Home from "./Home";
import Product from "../components/ProductCards/Product";
import ScanLace from "../components/ScanLace/ScanLace";
export default function Connect() {
  return (
    <div className="home-page">
      <Home />
      <Product />
    </div>
  );
}
