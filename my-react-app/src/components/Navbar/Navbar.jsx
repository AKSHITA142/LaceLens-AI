import { NavLink } from "react-router-dom"
import "./Navbar.css"

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-top">
        <div>
        <img className="logo" src="../public/images/Sagaram-Lace-Logo.jpg" />
        <h1 className="brand">SAGARAM LACE</h1>
        </div>
        <span className="tagline">LACES & TRIMS</span>
      </div>

      <nav className="navbar-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/laces">Laces Collections</NavLink>
        <NavLink to="/embroidery">Embroidery Collections</NavLink>
        <NavLink to="/zardosi">Handmade Zardosi Laces</NavLink>
        <NavLink to="/accessories">Accessories</NavLink>
        <NavLink to="/sale">Sale</NavLink>
        <NavLink to="/shop">Shop All</NavLink>
      </nav>
    </header>
  )
}
