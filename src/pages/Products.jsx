import { useSearchParams } from "react-router-dom"
import products from "../data/products"
import ProductCard from "../components/ProductCard"

function Products() {
  const [searchParams] = useSearchParams()
  const categoryFromUrl = searchParams.get("categorie") || "Tous"

  const filteredProducts =
    categoryFromUrl === "Tous"
      ? products
      : products.filter((product) => product.category === categoryFromUrl)

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Nos produits</h2>

      {/* FILTRES */}
      <div className="d-flex justify-content-center mb-4 flex-wrap gap-2">
        {["Tous", "Vêtements", "Accessoires"].map((cat) => (
          <a
            key={cat}
            href={`/produits?categorie=${cat}`}
            className={`btn ${
              categoryFromUrl === cat ? "btn-dark" : "btn-outline-dark"
            }`}
          >
            {cat}
          </a>
        ))}
      </div>

      {/* PRODUITS */}
      <div className="row g-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="col-12 col-sm-6 col-md-4 col-lg-3"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
