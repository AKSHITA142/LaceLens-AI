import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainLayout from "./components/layouts/MainLayout"
import ScrollToTop from "./components/ScrollToTop";
import Shop from "./Pages/Shop"

import Home from "./Pages/Home"
import Laces from "./Pages/Laces"
import Embroidery from "./Pages/Embroidery"
import Zardosi from "./Pages/Zardosi"
import Accessories from "./Pages/Accessories"
import Sale from "./Pages/Sale"
import Connect from "./Pages/Connect"
import CategoryPage from "./Pages/CategoryPage/CategoryPage"
import ScanResults from "./components/ScanLace/ScanResults";
import UploadLace from "./Pages/admin/UploadLace";

export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Connect />} />
          <Route path="/laces" element={<Laces />} />
          <Route path="/embroidery" element={<Embroidery />} />
          <Route path="/zardosi" element={<Zardosi />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/category/:slug" element={<CategoryPage />} />
          <Route path="/scan/results" element={<ScanResults />} />
          <Route path="/admin/upload-lace" element={<UploadLace />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}
