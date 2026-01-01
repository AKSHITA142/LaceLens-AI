import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import { Outlet } from "react-router-dom"

export default function MainLayout() {
  return (
    <div className="site-shell">
      <Navbar />
      <div className="site-body">
        <Outlet />
      </div>

      <Footer />
    </div>
  )
}


