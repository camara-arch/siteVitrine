import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Products from "./pages/Products"
import About from "./pages/About"
import Contact from "./pages/Contact"
import ProductDetail from "./pages/ProductDetail"
import './App.css'
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import Cart from "./pages/Cart"
import Order from "./pages/Order"

function App() {

  useEffect(() => {
    AOS.init({ duration: 800 })
  }, [])

  return (
    <div className="d-flex flex-column min-vh-100">
        
      <Navbar />

      {/* Contenu principal */}
      <main className="flex-fill">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produits" element={<Products />} />
          <Route path="/apropos" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/produit/:id" element={<ProductDetail />} />
          <Route path="/panier" element={<Cart />} />
          <Route path="/commande" element={<Order />} />
        </Routes>
      </main>

      <Footer />

    </div>
  )
}

export default App
